#!/usr/bin/env node
import "dotenv/config";
import { Command } from "commander";
import { registerKbSearchCommand } from "./commands/kb/kb-search";
import { registerKbListCommand } from "./commands/kb/kb-list";
import { registerKbRetrieveCommand } from "./commands/kb/kb-retrieve";
import { registerKbAddCommand } from "./commands/kb/kb-add";
import { createKbService } from "./services/kb/kb-service";
import { createMockKbClient } from "./clients/mock-kb-client";
import { createHttpKbClient } from "./clients/http-kb-client";
import type { KBClient } from "./models/kb/kb-client";

/**
 * Chọn KBClient theo biến môi trường KB_CLIENT (mặc định "mock" nếu không set/rỗng — xem
 * decisions.vi.md mục 5 của tuần 3). KB_CLIENT=http bắt buộc có KB_API_URL — thiếu thì báo
 * lỗi rõ ngay lúc khởi động (không để CLI chạy mập mờ rồi mới lỗi khi gọi lệnh).
 */
function resolveKbClient(): KBClient {
  const clientType = (process.env.KB_CLIENT ?? "mock").trim().toLowerCase() || "mock";

  if (clientType === "mock") {
    return createMockKbClient();
  }

  if (clientType === "http") {
    const apiUrl = (process.env.KB_API_URL ?? "").trim();
    if (!apiUrl) {
      throw new Error("KB_API_URL is required when KB_CLIENT=http");
    }
    return createHttpKbClient(apiUrl);
  }

  throw new Error(`invalid KB_CLIENT: ${clientType} (chỉ nhận "mock" hoặc "http")`);
}

/**
 * Điểm vào CLI: chọn KBClient (mock/http) + gắn service + đăng ký nhóm lệnh `kb`
 * (search/list/retrieve/add).
 */
async function main(): Promise<void> {
  const kbClient = resolveKbClient();
  const kbService = createKbService(kbClient);

  const program = new Command();
  program
    .name("tickets")
    .description("Knowledge Base Integration CLI (Week 3)")
    .version("1.0.0");

  const kbCommand = program.command("kb").description("Thao tác với Knowledge Base");
  registerKbSearchCommand(kbCommand, kbService);
  registerKbListCommand(kbCommand, kbService);
  registerKbRetrieveCommand(kbCommand, kbService);
  registerKbAddCommand(kbCommand, kbService);

  await program.parseAsync(process.argv);
}

main().catch((err) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error(message);
  process.exit(1);
});
