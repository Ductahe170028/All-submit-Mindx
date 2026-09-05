# Nghiên cứu TDD — Tuần 1 (bản nháp viết lại)

Tài liệu này nói về TDD, gồm cách làm Red - Green - Refactor, các loại test, ví dụ nếu áp dụng vào Ticket Manager CLI và cách dùng test để kiểm tra code AI viết ra.

---

## 1. TDD và Red - Green - Refactor

### TDD là gì?

TDD (Test-Driven Development) là một quy trình phát triển phần mềm trong đó quy trình này muốn dev luôn đề ra một behavior trước khi làm một vấn đề nào đó, sau đó sẽ viết test để kiểm chứng các behavior đó, sau đó sẽ viết code vừa đủ để pass cái test đó(không cần lan man mà chỉ cần vừa đủ), để chứng tỏ là một việc làm xong đã có kiểm chứng chứ ko phải làm xong rồi mới nghĩ mình cần kiểm tra những gì, sau đó có thể refactor cho code sạch nếu cần thiết.

### Test và code khác nhau thế nào?

Test cũng là code nhưng mục đích của nó khác với code chính của chương trình. Test sẽ nói trước kết quả mong muốn là gì, còn code chính là phần viết ra để làm ra kết quả đó. Ví dụ muốn tạo một ticket có title là Bug login thì test sẽ kiểm tra sau khi tạo có ticket đó hay không, còn bên code sẽ xử lý việc tạo id, lưu title và lưu ticket.

Nói đơn giản hơn thì test giống như mình đặt ra điều kiện thế nào mới gọi là làm đúng, còn code là cách mình thực hiện để đạt được điều kiện đấy.

### Viết test khi chưa có code

Việc chưa có code mà đã viết test nghe hơi ngược,nhưng trong TDD thì có thể viết trước cách mình muốn sử dụng hàm và kết quả nó phải trả về, sau đó chạy test và test fail vì hàm chưa tồn tại hoặc chưa làm đúng là chuyện bình thường.

Test fail ở lúc này không có nghĩa là mình làm sai, mà nó cho thấy behavior mình cần đã được nêu ra nhưng chương trình hiện tại chưa đáp ứng nó. Sau đó mình mới viết phần code cần thiết cho behavior đó.

### Làm từng phần nhỏ

TDD ko có nghĩa là ngồi nghĩ toàn bộ tất cả test của chương trình rồi viết hết một lần. Nên chia nhỏ từng behavior ra, làm xong cái nào và kiểm chứng được cái đó trước rồi mới sang cái tiếp theo, như vậy lúc lỗi cũng dễ biết lỗi nằm ở phần vừa làm.

Quy trình có thể làm như sau:

- Chọn một trường hợp cần làm, thường là trường hợp cơ bản nhất.
- Viết một test cho trường hợp đó rồi chạy để thấy nó fail.
- Viết lượng code vừa đủ để test pass.
- Nếu code đang lặp hoặc khó đọc thì refactor lại.
- Sau đó mới thêm trường hợp tiếp theo và lặp lại.

Mỗi test cũng nên tập trung vào một vấn đề rõ ràng, ko nên nhét quá nhiều trường hợp khác nhau vào cùng một test vì nếu fail sẽ khó hiểu chính xác vấn đề nào đang sai.

### Red - Green - Refactor

Red là lúc mình viết test cho behavior mới và chạy nó để thấy test fail. Bước này giúp chứng minh test thật sự đang kiểm cái chưa có, chứ nếu mình vừa viết một test mới mà nó pass luôn thì cũng cần xem lại là behavior đã có sẵn hay test của mình chưa kiểm đúng cái mình muốn.

Green là sau khi có test đỏ thì mình viết code để test đó pass. Ở bước này chỉ cần code vừa đủ để giải quyết behavior đang làm, chưa cần nghĩ thêm quá nhiều trường hợp hoặc làm cho nó phức tạp hơn yêu cầu.

Refactor là khi test đã xanh thì mình có thể sửa lại code cho dễ đọc hơn, bỏ phần trùng nhau hoặc tách phần nào đó ra nếu cần. Refactor ko được làm thay đổi behavior đã chốt, vì vậy sửa xong vẫn phải chạy lại test, nếu test đỏ thì có nghĩa là lúc dọn code mình đã làm ảnh hưởng kết quả cũ.

Tóm lại Red là nêu ra cái mình muốn và thấy hiện tại chưa làm được, Green là làm vừa đủ cho nó hoạt động, còn Refactor là dọn lại code nhưng ko làm thay đổi kết quả.

### Vì sao phải chạy lại test?

Sau khi code đã pass rồi vẫn cần chạy lại test mỗi khi sửa hoặc refactor vì có những lúc mình chỉ nghĩ là đổi tên hoặc dọn code thôi nhưng lại vô tình làm hỏng phần khác. Khi bộ test còn nhỏ thì có thể chạy toàn bộ, còn nếu lớn hơn thì trước tiên chạy phần liên quan và trước khi coi là xong vẫn nên chạy đủ test.

### Vì sao thứ tự này quan trọng?

Viết test trước bắt mình phải hiểu rõ là đang muốn chương trình làm gì trước khi bắt đầu code. Sau đó Green giữ cho code chỉ làm vừa đủ theo yêu cầu đã đặt ra, còn Refactor được làm sau khi đã có test bảo vệ nên sẽ an toàn hơn.

Nếu mình viết code xong rồi mới thêm test thì vẫn là có kiểm thử và vẫn tốt hơn ko test, nhưng quy trình đó ko còn đúng là TDD nữa vì behavior ko được đặt ra trước code. Ngoài ra lúc test sau cũng dễ bị ảnh hưởng bởi code mình vừa viết, tức là mình kiểm cái code đang làm chứ ko chắc đã kiểm đúng cái ban đầu mình cần, và cũng có thể trong quá trình làm còn quyên viết test hoặc quên mình đã làm gì để viết test cho chuẩn.

---

## 2. Unit test, Integration test và E2E

Ba loại test này khác nhau chủ yếu ở phạm vi nó kiểm tra rộng tới đâu, chứ ko phải cứ test một hàm là unit hoặc test nhiều hàm thì tự động là integration.

### Unit test

Unit test thường kiểm tra một phần logic nhỏ và tập trung vào một câu hỏi cụ thể. Nó thường gọi thẳng service hoặc hàm cần kiểm và ko đi qua file thật, database thật, API thật hay chạy câu lệnh CLI thật.

### Integration test

Integration test kiểm tra khi nhiều phần thật nối với nhau thì chúng có hoạt động đúng ko. Ví dụ service tạo ticket gọi JSON store và ticket thật sự được ghi vào file, lúc đó ko chỉ kiểm logic create nữa mà còn kiểm cả việc nối với phần lưu file, cũng có một kiểu nữa đó là integration test là kiểm tra sự kết hợp giữa nhiều modules trong be(cái này cũng sẽ ko động đến db,API,...)

### E2E

E2E là kiểm tra một luồng đầy đủ gần giống cách người dùng thật sử dụng chương trình. Nó ko bắt buộc phải là một trang web có giao diện, với CLI thì vẫn có thể kiểm một luồng như tạo ticket, list ra, show ticket đó rồi update status.

E2E sát thực tế hơn nhưng thường chạy lâu hơn và khi fail cũng khó biết chính xác sai ở tầng nào hơn. Vì thế ko nên dùng E2E để thay hết unit và integration, mà mỗi loại sẽ kiểm một mức khác nhau.

Tóm lại:

- Unit kiểm một phần logic nhỏ và ko đụng hệ thống bên ngoài.
- Integration kiểm các phần được ghép với file, API, database hoặc CLI thật.
- E2E kiểm cả hành trình sử dụng từ đầu tới cuối.

Ranh giới giữa integration và E2E đôi khi cũng ko hoàn toàn rõ, có bài test người này gọi integration nhưng người khác có thể gọi E2E. Tên gọi ko quan trọng bằng việc cả team hiểu bài test đó đang kiểm tới đâu, chạy có chậm ko và khi hỏng thì phạm vi cần tìm lỗi là thế nào.

---

## 3. Ví dụ test cho Ticket Manager CLI

Nếu áp dụng TDD vào bài Ticket Manager CLI thì có thể chia theo từng command là create, list, show và update. Ticket được lưu trong file JSON và có các thông tin title, description, status, priority, tags. Ngoài trường hợp chạy đúng thì cũng cần nghĩ đến nhập sai, ko tìm thấy id hoặc file JSON có vấn đề.

### Create

Trường hợp đầu tiên có thể là tạo ticket với title hợp lệ thì phải tạo thành công và có id. Sau khi trường hợp cơ bản đã pass thì thêm title trống hoặc thiếu title phải báo lỗi và ko tạo ticket.

Phần rule title có thể kiểm bằng unit test. Còn muốn biết ticket tạo xong có được lưu thật hay ko thì dùng integration test để đọc lại file JSON. Sau khi đã chốt status và priority được phép gồm những gì thì mới thêm test cho các giá trị sai, ko nên tự đoán rule khi yêu cầu chưa rõ.

### List

List cơ bản cần kiểm khi đã có ticket thì phải hiện đúng các ticket đó, còn khi chưa có ticket thì trả danh sách rỗng chứ ko được làm chương trình sập.

Sau đó có thể làm từng bộ lọc một như lọc status, priority và tags. Nếu dùng nhiều bộ lọc cùng lúc thì cần chốt rõ chúng kết hợp với nhau thế nào rồi mới viết test, vì ko có rule rõ mà tự viết test trước thì test đó chỉ đang kiểm điều mình tự nghĩ ra.

### Show

Show cần kiểm id tồn tại thì hiện đúng ticket và đầy đủ thông tin cần có. Nếu id ko tồn tại thì phải báo rõ là ko tìm thấy, còn thiếu id hoặc id sai định dạng thì phải báo lỗi nhập liệu thay vì sập với một lỗi khó hiểu.

### Update

Với update status, trường hợp cơ bản là ticket có thật và status mới hợp lệ thì cập nhật thành công, sau đó đọc lại vẫn thấy status mới để chắc là nó đã được lưu chứ ko chỉ đổi tạm ở trong bộ nhớ.

Các trường hợp lỗi gồm id ko tồn tại, status mới ko hợp lệ, thiếu id hoặc thiếu status. Mỗi trường hợp nên là một test riêng để khi có test fail mình biết đúng rule nào đang bị sai.

### File JSON và lỗi chung

Nếu file tickets chưa tồn tại thì chương trình có thể coi như danh sách đang rỗng, đến khi tạo ticket đầu tiên mới tạo file. Nếu file có nhưng JSON bị hỏng thì nên báo một lỗi có ý nghĩa, ko nên để người dùng nhìn thấy lỗi parse dài mà ko biết vấn đề là gì.

Theo thứ tự làm thì nên bắt đầu create hợp lệ, title trống và kiểm tra lưu JSON. Sau đó làm list cơ bản, show, update rồi mới tới filter, các giá trị ko hợp lệ và JSON hỏng. Lý do là làm luồng chính trước để có cái chạy được, sau đó bổ sung từng trường hợp lỗi chứ ko cố làm tất cả cùng lúc.

---

## 4. Dùng test để kiểm soát code AI viết

AI có thể viết code nhanh nhưng nhanh ko có nghĩa là đúng hoàn toàn. Nó có thể hiểu sai câu hỏi, tự thêm yêu cầu ko có, quên một trường hợp lỗi hoặc đưa ra code nhìn hợp lý nhưng khi chạy thật lại ko hoạt động.

Test giúp mình có một cách kiểm tra cụ thể thay vì chỉ đọc code rồi thấy có vẻ đúng. Ví dụ trước khi nhờ AI viết create thì mình đã chốt title trống ko được tạo và create thành công phải lưu vào JSON, sau đó code AI đưa ra phải pass đúng các test đó mới có cơ sở để chấp nhận.

Trong vòng Red - Green - Refactor, dev có thể tự viết test đỏ để nêu behavior, sau đó nhờ AI đề xuất code cho Green. Khi AI sửa code hoặc refactor thì chạy lại test để xem nó có phá phần cũ ko. Nếu fail thì đưa lỗi cụ thể lại cho AI sửa tiếp chứ ko copy code rồi tin luôn.

Viết code trước rồi mới nhờ AI tạo test vẫn có thể phát hiện lỗi, nhưng có một vấn đề là test dễ được viết theo đúng cách code AI hiện tại đang chạy. Khi đó code và test có thể cùng hiểu sai yêu cầu mà mình vẫn thấy tất cả xanh. Vì vậy cần có danh sách behavior mình muốn từ trước để làm chuẩn, ko nên để AI vừa tự đặt yêu cầu vừa tự viết code rồi tự viết test xác nhận chính nó.

Test xanh cũng ko chứng minh code ko có phần thừa, vì test chỉ kiểm những điều mình đã viết trong test. AI vẫn có thể tạo thêm hàm, thêm xử lý hoặc thêm dependency ko cần thiết mà test ko báo lỗi. Vì vậy sau khi test pass vẫn phải đọc lại code xem nó có đúng ý, có phần nào thừa hoặc có dùng thứ ko tồn tại hay ko.

Nói chung AI là người hỗ trợ đề xuất cách làm, còn test là một trong các cách để đo kết quả có đúng hay ko. Tuy nhiên test cũng do người viết nên nếu bản thân test sai hoặc thiếu thì code pass cũng chưa chắc đúng hết.

---

## 5. Một số lỗi thường gặp khi viết test

### Viết quá nhiều test ko cần thiết

Ko có một con số cố định là phải có bao nhiêu test mới gọi là tốt. Quan trọng là các behavior chính và trường hợp lỗi cần thiết đã được kiểm tra, chứ viết rất nhiều test gần giống nhau chỉ làm bộ test dài và mỗi lần sửa code cũng mất công sửa theo.

Cách tránh là mỗi test nên trả lời một câu hỏi rõ. Nếu một test bị bỏ đi nhưng mình ko mất thêm sự tin tưởng nào vào chương trình thì có thể test đó đang bị trùng hoặc ko cần thiết.

### Test xanh nhưng ko kiểm đúng vấn đề

Một test có thể pass nhưng điều kiện kiểm tra lại quá chung chung. Ví dụ yêu cầu là title trống thì ko được tạo ticket, nhưng test chỉ kiểm hàm ko bị crash. Lúc đó ticket vẫn có thể bị tạo sai mà test vẫn xanh.

Vì vậy kết quả mong đợi phải bám đúng behavior đang nói đến. Nếu cần kiểm ko tạo ticket thì phải kiểm store ko có ticket mới hoặc hàm trả lỗi đúng, ko chỉ kiểm chương trình còn chạy.

### Test bám quá chặt vào code bên trong

Test nên quan tâm kết quả người dùng hoặc phần gọi hàm nhận được hơn là code bên trong gọi hàm phụ nào và theo đúng thứ tự nào. Nếu test bắt cứng tên hàm phụ thì chỉ cần refactor đổi tên, dù behavior vẫn đúng, test cũng fail và như vậy test đang cản mình dọn code.

Ví dụ create ticket thì điều quan trọng là ticket được tạo đúng và lưu được, còn service chia thành hai hay ba hàm phụ là cách tổ chức code và có thể thay đổi về sau.

### Tin AI hoặc tin test xanh hoàn toàn

AI đưa code pass hết test chưa có nghĩa là công việc chắc chắn xong, vì có thể bộ test còn thiếu hoặc AI đã làm thêm những phần ko được yêu cầu. Ngược lại cũng ko nên thấy một test fail rồi sửa bừa cho xanh mà ko hiểu nguyên nhân.

Cách tránh là đọc lại cả yêu cầu, test và code. Test kiểm đúng behavior chưa, code có thừa hoặc lệch ko, lỗi báo ra có giúp mình hiểu vấn đề ko. Test là công cụ hỗ trợ kiểm chứng chứ ko thay cho việc mình tự xem lại.

Tóm lại số lượng test nhiều ko quan trọng bằng test đúng cái cần kiểm, test nên bám behavior thay vì cách code đang được viết, và dù có AI hỗ trợ với test xanh thì người làm vẫn phải hiểu và đọc lại kết quả trước khi coi là xong.

---

