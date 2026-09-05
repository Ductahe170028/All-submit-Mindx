# Phân tích ticket và lý do chọn tool xử lý đăng nhập

---

## 1. Kết luận

Trong tuần 4 có **6 tình huống**, mỗi tình huống là một loại vấn đề khác nhau chứ không phải 6 ticket cùng một lỗi.

Sau khi xem lại, em chia 6 tình huống thành 4 nhóm. Trong đó nhóm **LMS chạy kém** có nhiều ticket và ảnh hưởng nhiều người nhất. Tuy nhiên, em chọn vấn đề **không đăng nhập được LMS** để làm tool vì đây là công việc support phải thực hiện theo các bước khá giống nhau và phần lớn các bước đều có thể kiểm tra, xử lý tự động.

Tool hiện tại đã hoàn thành và được nối với Odoo Helpdesk. Repo: `login-ticket-automation`.

---

## 2. Em đã làm gì?

### Bước 1 — Xem lại 6 tình huống tuần 4

Em mở lại các ticket trên Odoo và đối chiếu với 6 bài tập tuần 4. Với mỗi tình huống, em xem:

* Khách đang gặp vấn đề gì
* Support phải làm những bước nào để xử lý
* Thời gian xử lý thủ công khoảng bao lâu
* Việc đó có lặp lại hay không
* Có phần nào máy có thể làm thay support không

### Bước 2 — Chia ticket thành các nhóm

Sau khi xem lại, em chia 6 tình huống thành 4 nhóm:

* Tài khoản LMS
* LMS chạy kém / lỗi hệ thống
* Yêu cầu tính năng
* Công việc nội bộ có hạn chót

Việc chia nhóm giúp em nhìn rõ hơn loại vấn đề nào xuất hiện nhiều, loại nào ảnh hưởng nhiều người và loại nào phù hợp để tự động hóa.

### Bước 3 — Chọn vấn đề đăng nhập

Mặc dù nhóm LMS chạy kém có nhiều ticket hơn, em không chọn nhóm này vì nguyên nhân thường nằm ở hệ thống và cần Dev Team kiểm tra.

Với ticket đăng nhập, quy trình xử lý rõ ràng hơn: kiểm tra người dùng còn làm việc không, kiểm tra trạng thái tài khoản LMS, sau đó mở khóa hoặc đặt lại mật khẩu nếu đủ điều kiện.

Đây là chuỗi công việc có thể để máy làm thay phần lớn nên em chọn loại này.

### Bước 4 — Làm tool và nối với Odoo

Khi support kiểm tra ticket và chuyển ticket sang trạng thái **Đang xử lý**, tool bắt đầu chạy.

Tool kiểm tra hồ sơ nhân sự và tài khoản LMS. Nếu đủ điều kiện, tool mở khóa hoặc đặt lại mật khẩu, gửi mail cho người dùng và ghi lại kết quả trên ticket.

---

## 3. Sáu loại vấn đề trong tuần 4

### 01 — Không đăng nhập được / quên mật khẩu

* Nhóm: Tài khoản LMS
* Ảnh hưởng: 1 giáo viên
* Thời gian làm tay: khoảng 5–10 phút
* Các bước xử lý khá giống nhau giữa các lần
* Máy có thể kiểm tra trạng thái nhân sự và tài khoản

**Đây là loại em chọn để làm tool.**

### 02 — LMS chậm, không tải được trang

* Nhóm: LMS chạy kém
* Ảnh hưởng: khoảng 15 học viên trong một lớp
* Thời gian xử lý: khoảng 15–30 phút
* Support có thể kiểm tra ban đầu và thông báo cho khách
* Nếu lỗi từ hệ thống thì vẫn cần Dev Team tìm nguyên nhân và xử lý

### 03 — Hệ thống lỗi, không nộp được bài

* Nhóm: LMS chạy kém
* Ảnh hưởng: hơn 50 học viên ở nhiều lớp
* Mức độ ảnh hưởng lớn, cần ưu tiên xử lý
* Support chủ yếu tiếp nhận thông tin, cập nhật tình hình và chuyển Dev Team

### 04 — Yêu cầu tính năng mới

* Nhóm: Product
* Ảnh hưởng trực tiếp: 1 người gửi yêu cầu
* Nội dung yêu cầu có thể khác nhau ở mỗi ticket
* Support không thể tự quyết định hoặc tự triển khai
* Cần chuyển Product Team đánh giá

### 05 — Video không xem được, nhiều người gặp cùng lúc

* Nhóm: LMS chạy kém
* Ảnh hưởng: khoảng 12 học viên
* Support cần xác định đây là lỗi của từng người hay lỗi chung
* Nếu lỗi từ hệ thống thì cần chuyển Dev Team xử lý

### 06 — Yêu cầu báo cáo gấp, có hạn chót

* Nhóm: Công việc nội bộ / hạn chót
* Ảnh hưởng trực tiếp: 1 giám đốc
* Báo cáo cần có trước 09:00
* Support cần làm rõ yêu cầu và liên hệ người có quyền xử lý hoặc phê duyệt
* Không phù hợp để máy tự quyết định

---

## 4. Phân loại theo nhóm

Em không để 6 ticket thành 6 trường hợp riêng mà gom lại theo loại vấn đề:

* **Nhóm A — Tài khoản LMS:** ticket 01
* **Nhóm B — LMS chạy kém / lỗi hệ thống:** ticket 02, 03, 05
* **Nhóm C — Yêu cầu tính năng:** ticket 04
* **Nhóm D — Công việc nội bộ có hạn chót:** ticket 06

Nhóm B có nhiều ticket nhất với 3/6 ticket.

Nhóm A trong bài tập tuần 4 chỉ có 1 ticket. Tuy nhiên, nếu trong thực tế có nhiều trường hợp quên mật khẩu hoặc tài khoản bị khóa do lâu không đăng nhập thì quy trình xử lý sẽ lặp lại khá nhiều. Vì vậy em chọn nhóm A để thử tự động hóa.

---

## 5. Thống kê từ các ticket tuần 4

Số liệu được lấy từ danh sách ticket luyện tập tuần 4 trên Odoo (ảnh: `ticket-list.png`).

Danh sách hiện có **8 ticket**, gồm 6 bài tập và 2 ticket video bị trùng (`00012`, `00013`). Vì đây chỉ là dữ liệu của bài tập tuần 4 nên em không dùng nó để kết luận về số lượng ticket thực tế của cả tháng.

Em chỉ dùng số liệu này để so sánh giữa các tình huống trong bài.

### Theo nhóm

* Nhóm A — Tài khoản LMS: **1 ticket (~17%)**
* Nhóm B — LMS chạy kém: **3 ticket (50%)**
* Nhóm C — Yêu cầu tính năng: **1 ticket (~17%)**
* Nhóm D — Công việc nội bộ có hạn chót: **1 ticket (~17%)**

### Theo mức độ ảnh hưởng

* 1 người, không phải sự cố hệ thống gấp: 2 ticket (01, 04)
* Nhiều người, khoảng 5–25 người: 2 ticket (02, 05)
* Rất nhiều người và cần xử lý ngay: 1 ticket (03)
* Có hạn chót cụ thể: 1 ticket (06)

### Số người bị ảnh hưởng theo từng tình huống

* Ticket 01 — đăng nhập: 1 giáo viên
* Ticket 02 — LMS chậm: 15 học viên
* Ticket 03 — không nộp được bài: hơn 50 học viên
* Ticket 04 — yêu cầu tính năng: 1 người
* Ticket 05 — video lỗi: 12 học viên
* Ticket 06 — báo cáo: 1 giám đốc, có hạn chót

Nhìn vào số liệu có thể thấy nhóm B ảnh hưởng nhiều người nhất. Riêng ticket 03 có mức độ ảnh hưởng lớn nhất.

Tuy nhiên, mức độ ảnh hưởng lớn không đồng nghĩa với việc phù hợp để support tự làm tool xử lý. Các lỗi thuộc nhóm B chủ yếu cần Dev Team tìm nguyên nhân trong hệ thống.

---

## 6. Thời gian support xử lý thủ công

Thời gian dưới đây là ước lượng dựa trên lúc em thực hiện các tình huống tuần 4:

* **01 — Đăng nhập:** khoảng 8 phút/ticket
* **02 — LMS chậm:** khoảng 15–30 phút để kiểm tra ban đầu, trao đổi với khách và chuyển Dev Team
* **03 — Sự cố lớn:** cần theo dõi và cập nhật tình hình cho đến khi Dev Team xử lý xong
* **04 — Yêu cầu tính năng:** support ghi nhận yêu cầu và chuyển Product Team
* **05 — Video lỗi:** kiểm tra tình trạng, tìm cách xử lý tạm thời và chuyển Dev Team nếu là lỗi hệ thống
* **06 — Báo cáo gấp:** làm rõ yêu cầu và liên hệ người có quyền xử lý, thời gian còn phụ thuộc vào người được chuyển tiếp

Từ đây em rút ra:

* Nhóm xuất hiện nhiều nhất là **LMS chạy kém**
* Ticket ảnh hưởng nhiều người nhất là **ticket 03**
* Công việc support có thể tự động hóa rõ nhất là **ticket 01**

Nếu chỉ nhìn vào số lượng ticket thì nhóm B sẽ là nhóm nên ưu tiên. Nhưng mục tiêu của tool là giảm phần công việc lặp lại mà support đang phải làm thủ công. Vì vậy em chọn ticket đăng nhập.

---

## 7. Vì sao em chọn vấn đề đăng nhập?

Khi người dùng báo không đăng nhập được hoặc quên mật khẩu, support thường phải thực hiện một chuỗi bước tương đối giống nhau:

1. Kiểm tra người dùng còn làm việc hay không
2. Kiểm tra có tài khoản LMS hay không
3. Kiểm tra trạng thái tài khoản
4. Nếu tài khoản bị khóa thì mở lại
5. Nếu cần thì đặt lại mật khẩu
6. Gửi thông tin cho người dùng
7. Ghi lại kết quả trên ticket

Các bước trên có điều kiện khá rõ ràng và dữ liệu có thể kiểm tra được, vì vậy máy có thể làm thay support phần lớn quy trình.

Giả sử LMS có quy định khóa tài khoản sau 30 ngày không đăng nhập thì loại ticket này còn có khả năng lặp lại. Ngoài ra vẫn luôn có trường hợp người dùng quên mật khẩu.

Trong khi đó, 5 tình huống còn lại khó tự động xử lý hoàn toàn:

* LMS chậm, sập hoặc video lỗi cần Dev Team tìm nguyên nhân
* Yêu cầu tính năng cần Product Team quyết định
* Báo cáo gấp phụ thuộc vào nội dung yêu cầu và quyền của từng người

Vì vậy em chọn bài toán nhỏ hơn nhưng có quy trình rõ và có thể tự động hóa được.

---

## 8. Làm tool hay chờ sửa LMS?

Trong trường hợp giả sử LMS có rule tự khóa tài khoản sau 30 ngày không đăng nhập thì đây là quy định của hệ thống chứ không hẳn là bug.

Nếu muốn thay đổi rule này thì cần Product Team xem xét và có thể phải chờ Dev Team thay đổi LMS.

Trong khi đó, support vẫn phải xử lý các ticket phát sinh hằng ngày.

Vì vậy em chọn làm tool trước để giải quyết phần việc của support. Nếu người dùng vẫn còn làm việc và tài khoản đủ điều kiện mở lại thì tool có thể xử lý ngay.

Về lâu dài, nếu số lượng ticket loại này nhiều thì vẫn nên xem xét nguyên nhân gốc, ví dụ gửi mail nhắc trước khi tài khoản bị khóa hoặc thay đổi rule nếu Product Team thấy hợp lý.

Tool là cách giảm công việc hiện tại, không phải giải pháp thay thế việc sửa nguyên nhân gốc.

---

## 9. Phương án cho từng nhóm

### Nhóm A — Tài khoản LMS

**Hiện tại:** sử dụng tool đã làm.

Khi ticket chuyển sang **Đang xử lý**, tool kiểm tra dữ liệu và tự xử lý nếu đủ điều kiện.

Nếu người dùng đã nghỉ việc hoặc không tìm thấy thông tin trong hệ thống nhân sự/LMS thì tool không tự xử lý mà đánh dấu để support kiểm tra thủ công.

**Về sau:** nếu thực tế có nhiều tài khoản bị khóa do rule 30 ngày thì có thể đề xuất gửi mail nhắc trước khi khóa hoặc xem xét lại rule.

### Nhóm B — LMS chạy kém

Với LMS chậm, không nộp được bài hoặc video lỗi, support nên kiểm tra ban đầu để xác định phạm vi ảnh hưởng.

Nếu nhiều người gặp cùng một lỗi thì nên gom thông tin vào một ticket chính, cập nhật tình hình cho người dùng và chuyển Dev Team.

Em không chọn viết tool tự sửa nhóm này vì support không có đủ thông tin và quyền để tự xử lý lỗi bên trong LMS.

### Nhóm C — Yêu cầu tính năng

Support ghi nhận đầy đủ yêu cầu và chuyển Product Team đánh giá.

Support không nên hứa trước thời gian có tính năng khi Product Team chưa xác nhận.

Có thể dùng form chung để người gửi điền rõ nhu cầu, mục đích và mức độ cần thiết, giúp Product Team có đủ thông tin ngay từ đầu.

### Nhóm D — Công việc có hạn chót

Support cần hỏi rõ nội dung báo cáo, phạm vi dữ liệu và thời gian cần hoàn thành, sau đó chuyển đến người có quyền xử lý.

Có thể tạo mẫu yêu cầu báo cáo gấp gồm:

* Cần báo cáo gì
* Kỳ dữ liệu nào
* Cơ sở/bộ phận nào
* Hạn cần có báo cáo

Việc này giúp giảm thời gian hỏi lại nhưng không nên để máy tự phê duyệt.

---

## 10. Tool hoạt động như thế nào?

Quy trình hiện tại:

**Support tạo ticket → kiểm tra thông tin → chuyển sang Đang xử lý → tool bắt đầu xử lý.**

Sau khi nhận ticket, tool kiểm tra hồ sơ nhân sự và tài khoản LMS.

### Trường hợp có thể xử lý tự động

Nếu người dùng vẫn còn làm việc và tìm thấy tài khoản LMS:

* Kiểm tra trạng thái tài khoản
* Mở khóa hoặc đặt lại mật khẩu nếu cần
* Gửi mail cho người dùng
* Ghi chú kết quả vào ticket
* Đánh dấu ticket đã được tool xử lý

### Trường hợp cần support xử lý

Nếu:

* Người dùng đã nghỉ việc
* Không tìm thấy hồ sơ nhân sự
* Không tìm thấy tài khoản LMS
* Dữ liệu không đủ để tool quyết định

thì tool không tự thay đổi tài khoản mà ghi chú để support kiểm tra thủ công.

Em cũng thêm một số điều kiện để tránh tool chạy sai:

* Ticket đang được soạn thì tool chưa chạy, chỉ chạy khi chuyển sang **Đang xử lý**
* Ticket đã được tool xử lý thì không xử lý lại
* Nếu server bị tắt rồi bật lại, tool sẽ kiểm tra các ticket còn chưa xử lý để tránh bỏ sót

---

## 11. Tool mang lại gì?

Trước khi có tool, một ticket đăng nhập mất khoảng **8 phút** để support kiểm tra và xử lý.

Sau khi có tool, với trường hợp đủ điều kiện tự động, support chủ yếu chỉ cần xem kết quả trên Odoo. Em ước lượng còn khoảng **1 phút/ticket**.

Như vậy có thể giảm khoảng **7 phút cho mỗi ticket đăng nhập**.

Tuần 4 mới chỉ có một ticket thuộc loại này nên chưa đủ dữ liệu để kết luận tool giúp tiết kiệm bao nhiêu thời gian trong một tháng.

Nếu sau này có dữ liệu ticket thực tế, em có thể đo:

* Có bao nhiêu ticket đăng nhập mỗi tuần/tháng
* Bao nhiêu ticket tool xử lý được hoàn toàn
* Bao nhiêu ticket vẫn phải xử lý tay
* Thời gian trung bình trước và sau khi dùng tool

Ngoài việc giảm thời gian, tool còn giúp:

* Người dùng nhận phản hồi nhanh hơn
* Giảm khả năng support bỏ sót bước kiểm tra
* Có lịch sử xử lý rõ trên ticket
* Support có thêm thời gian để tập trung vào các sự cố ảnh hưởng nhiều người

---

## 12. Kế hoạch giảm lượng ticket

Tool giúp xử lý ticket nhanh hơn nhưng không có nghĩa là số ticket tự giảm. Vì vậy em chia thành hai hướng.

**Hướng 1 — Giảm thời gian xử lý**

Tool đăng nhập đã hoàn thành và giúp support không phải lặp lại toàn bộ các bước thủ công với những ticket đủ điều kiện.

**Hướng 2 — Giảm số ticket phát sinh**

Khi có thêm dữ liệu thực tế, em sẽ theo dõi các ticket liên quan đến login/LMS để xem nguyên nhân nào xuất hiện nhiều.

Có thể bổ sung hướng dẫn ngắn cho người dùng về:

* Quên mật khẩu / không đăng nhập được
* LMS chậm
* Sự cố hệ thống
* Yêu cầu tính năng
* Yêu cầu báo cáo gấp

Nếu thực tế có nhiều tài khoản bị khóa vì rule 30 ngày, có thể đề xuất Product Team gửi mail nhắc trước khi khóa hoặc xem lại rule.

Như vậy, tool giải quyết phần **xử lý nhanh hơn**, còn hướng dẫn và thay đổi từ phía sản phẩm mới là phần giúp **giảm số ticket phát sinh**.

---

## 13. Tóm lại

Qua 6 tình huống tuần 4, em chia được thành 4 nhóm vấn đề.

Nhóm **LMS chạy kém** có nhiều ticket và ảnh hưởng nhiều người nhất. Tuy nhiên, các lỗi này chủ yếu cần Dev Team tìm nguyên nhân và sửa hệ thống nên không phù hợp với một tool support có thể tự làm trong thời gian ngắn.

Em chọn **tài khoản LMS** vì quy trình xử lý rõ, lặp lại và phần lớn các bước có thể kiểm tra bằng dữ liệu.

Tool hiện đã được nối với Odoo Helpdesk. Khi ticket đăng nhập chuyển sang **Đang xử lý**, tool có thể kiểm tra trạng thái người dùng và tài khoản LMS, xử lý những trường hợp đủ điều kiện và chuyển những trường hợp không chắc chắn lại cho support.

Mục tiêu của tool không phải thay thế Dev Team hay thay đổi rule của LMS, mà là giảm phần công việc thủ công lặp lại của support.

Nếu sau này có thêm dữ liệu ticket thực tế, em sẽ dựa vào số lượng ticket, tỷ lệ tool xử lý thành công và thời gian xử lý trước/sau để đánh giá tool có thực sự mang lại hiệu quả hay không.
