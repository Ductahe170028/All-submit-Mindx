# Bằng chứng 3 quy trình AI — Tuần 1

---

## 1. Đặt câu hỏi theo lớp

Hỏi khái niệm trước, hiểu rồi mới hỏi sát bài, rồi mới xin ví dụ.

**TDD là gì**

Hỏi: đây là tool, framework, hay chỉ là cách làm? Khác gì CLI tuần 2?

AI nhảy sang Red–Green. Không nhận. Bảo nói TDD là gì đã.

Hỏi tiếp: chưa có code mà viết test thì khác gì viết công thức làm bánh? Một chức năng phải viết hết test rồi mới code à? Công ty có làm vậy thật không, có chậm không? Green khác Refactor chỗ nào? Sửa một nhánh xong có phải chạy lại test luồng gốc không?

Hiểu được: TDD là thứ tự làm việc (test trước, code vừa đủ). Test là checklist “đúng là gì”, không phải công thức làm. Fail lúc chưa có code là đúng. Mỗi vòng một trường hợp, không viết hết test từ đầu.

**Unit / integration / E2E**

Hỏi: unit khác integration chỗ nào? “Chưa cần gõ CLI, chưa cần đụng JSON” nghĩa là sao? Làm một bước nhỏ trên CLI vẫn là unit được không? Có phải unit = một hành động trong hàm, integration = cả hàm `login`? E2E có bắt buộc FE + BE không? Ranh giới E2E và integration có phải chỉ là cách gọi, người này bảo thế người kia bảo khác?

Không đồng ý chia theo “hàm nhỏ / hàm to”. Cùng một hàm: chỉ gọi logic thì là unit; đụng file / lệnh / DB thật thì là integration. E2E là làm như người dùng. CLI không có web vẫn có E2E.

**Test cho CLI**

Hỏi lệnh create / list / show / update lấy từ đề hay AI nghĩ ra. Chưa rõ field thì không bịa rule kiểu “tên cấm ký tự đặc biệt”.

Bảo AI liệt kê vài case mỗi lệnh theo đúng đề tuần 2, đọc rồi mới chốt. “Status / priority không thuộc giá trị cho phép” nghĩa là gì, vì sao chưa viết sớm? Có ví dụ E2E không? Trước khi code có nên chỉ viết unit + integration không?

Chốt: bám đề. Title trống, có trong JSON, id không có, JSON hỏng. Enum status/priority để tuần 2. E2E không cấm nhưng không phải thứ viết trước khi code.

**Test khi có AI**

Hỏi: test giúp kiểm soát code AI thế nào? Nếu code trước rồi mới test thì còn bao quát được ý muốn không? AI viết theo test rồi vẫn có thể code thừa chứ? Có cách nào cấm 100% AI làm bừa không?

Chốt: test sau vẫn đo được, nhưng dễ test theo những gì AI đã làm. Phải giữ list ý muốn, đồng thời đọc code. Test xanh chưa đủ. Không có cách cấm 100%.

---

## 2. Khám phá phương án

Đã hiểu TDD, cần chọn hướng, chưa vội code.

**Một chức năng viết bao nhiêu test trước?**

Hai hướng: liệt kê hết validate rồi mới code, hoặc mỗi vòng một trường hợp.

Chọn từng case. Happy path trước, lỗi hay gặp sau. Không viết 50 test rồi mới đụng code.

**Liệt kê ví dụ test cho CLI thì bao nhiêu là đủ?**

Tình huống: đề tuần 1 bắt có ví dụ test cho Ticket Manager CLI. Hỏi: viết bao nhiêu case, không quá nhiều cũng không quá ít, và trước khi code có nên bỏ E2E không?

Hai hướng: liệt kê hết (cả lọc, giá trị status/priority, E2E), hoặc vài case chắc mỗi lệnh.

Chọn vài case chắc: tạo/xem/sửa đúng, lỗi hay gặp, JSON hỏng. Lọc và danh sách status/priority để khi đề đã chốt giá trị. E2E không viết trước khi code.

**Test trước hay code trước?**

TDD chặt hơn vì chốt “đúng là gì” trước. Code trước rồi test vẫn kiểm được, nhưng khó hơn: dễ viết test chiều theo code AI, và AI có thể làm thừa ngoài list. Nếu đã code rồi, phải xem cả ý muốn lẫn những gì AI đã viết. Chỉ bám một bên là thiếu.

---

## 3. Tinh chỉnh lặp lại

AI giải thích hoặc viết một đoạn về TDD. Không nhận nguyên. Chỉ chỗ hiểu sai, bắt nói lại.

Chỗ không nhận:

- Nhảy sang Red–Green khi chưa nói TDD là gì.
- Unit / integration chia theo độ dài hàm. Sửa: cùng hàm, khác ở chỗ có đụng file / CLI / DB hay không.
- Bịa test ngoài đề (tên phải viết hoa, cấm ký tự đặc biệt). Chỉ giữ case có trong overview tuần 2.
- Chỉ nói “viết test trước”. Bắt nói thêm: code trước rồi test thì kiểm soát thế nào, và test xanh vẫn không chặn AI viết thừa.
