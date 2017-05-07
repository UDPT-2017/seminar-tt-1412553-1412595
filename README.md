# Seminar-UDPT - *Tên đề tài*

**Tên đề tài** là một repository trong đề tài tìm hiểu của lớp Ứng dụng phân tán.

Thành viên:
* [ ] **1412553** Tên sinh viên 1 (tên tài khoản tqhb1995)
* [ ] **MSSV2** Tên sinh viên 2 (tên tài khoản github)

URL: **Link github page**

## Yêu cầu

Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Yêu cầu **GIT**
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [ ] Sử dụng GIT theo Feature Branch Workflow.
* [ ] Sử dụng GIT theo Gitflow Workflow.

Yêu cầu **bắt buộc**
* [x] Source code demo
* [x] Slide thuyết trình
* [ ] Tạo github page để viết lại báo cáo cho nội dung đề tài tìm hiểu

Các **nội dung lý thuyết** dự định tìm hiểu. Nhóm liệt kê các nội dung đã làm được vào bên dưới và check vào các nội dung đã tìm hiểu được.
* [x] Minify: css, html, js, image
* [x] Auto Refresh server
* [x] Viết sass chuyển sang css


Các **chức năng của demo** đã thực hiện hoặc dự kiến thực hiện. Nhóm check vào các chức năng đã làm
* [x] Minify:css, js, html, image
* [x] Auto Refresh server
* [x] Chuyển sass sang css

## Demo

Link ảnh GIF demo ứng dụng:

http://imgur.com/pC70Osz

Tạo ảnh GIF với chương trình [LiceCap](http://www.cockos.com/licecap/).


--------------------------------------------------------------------------------------------------------

Hướng dẫn làm bài:


GULP là gì?
Gulp là một task runner giúp chúng ta tự động hoá một số thao tác thường gặp trong quá trình làm việc, như ta lam việc với: 
•   auto reload server.
•   Minify các file: css, html, js, image, … để đưa sản phẩm ra môi trường.
•   Kiểm tra các lỗi trong  file javascript.
Bắt đầu với Gulp.
    Để bắt đầu với Gulp ta tạo một thư mục chưa Project mà ta dự định làm.
    Mở cửa sổ cmd lên và gõ dòng lệnh: npm install -g gulp   để cài đặt gulp với –g là để cài đặt gulp trên toàn bộ hệ thống của máy của bạn sẽ cho kết quả:

 

Bây giờ, chúng ta sẽ đưa gulp vào Project của bạn bằng dòng lệnh:  "npm init" và cài đặt Gulp  "npm install --save-dev gulp" sau khi chạy dòng lệnh xong trong thư mục dự án sẽ tạo ra 2 thư mục tên   trong đó package là file cài đặt của gulp  chứa tên các module đã cài đặt trên gulp. Ban đầu chúng ta chỉ mới cài đặt gulp mà thôi 
 
    Ta cần tạo cấu trúc file trong Project của bạn như sau:
    Project
        app
            css
            images
            js
            scss
        dist
        node_module
        gulpfile.js
        package.json

 

Sau đó chúng ta cài đặt các module cần thiết để đáp ứng nhu cầu sử dụng gulp ủa chún ta:
•   Gulp-rename: viết lại tên của file source.
•   Gulp cssnano: minify css
•   Gulp-concat: nối nội dung các file.
•   Gulp-less: biên dịch less sang css.
•   Gulp-uglify: minify javascript với UglifyJS2.
•   Gulp-minify-html: minify html.
•   Gulp-imagein: minify hình ảnh.
•   Browser-sync: Refresh lại các trình duyệt đang mở.
•   Uglify-js,gulp-uglify/minifier và pump: để minify JavaScript

Khi thực hiện viết các dòng lệnh để minify chúng thấy có các dòng như:
Gulp.src, gulp-task, gulp.dest. Trong đó:
•   Gulp.task: chưa tên của dòng lệnh.
•   Gulp.src: đường dẫn chứa các file.
•   Gulp.dest: nơi lưu trữ các file sau khi đã hoàn thành xong giao tác.
Trong quá trình viết ra một website chúng ta có thể xuống dòng nhiều lần hay code rất nhiều dòng rất lòng thòng và code trở nên nặng hơn. Điều đó chúng ta cần đến gulp để có thể minify các làm giảm tải dung lượng các file lại, ví dụ:

Minify HTML:
Cài đặt với dòng lệnh:  npm install gulp-minify-html --save-dev
Trong gulpfile thêm đoạn code: 
 

Và chúng ta cần khai báo biến:  

Sau đây là tổng thể của minify: css, js

Khai báo:

 
Code gulpfile:

 

Kết quả:

HTML:


 

CSS:

 
JS:

 

VIẾT Sass và chuyển *.scss sang *.css

Khai báo:
 

Code gulpfile:

 

Trong đó      nếu cố lỗi khi phân tích cú pháp SCSS nó cho chúng ta biết lỗi ở đâu và chúng ta có thể dễ dàng khắc phục.


 
Gulp Watch:
Khai báo:

 

Code gulpfile:

 

Trong đó: 

   thư mục mặc định để mở file khi khởi động bằng locahost

Hệ thống sẽ khởi động trình duyệt và mở file index.html trên http://localhost:3000






## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
