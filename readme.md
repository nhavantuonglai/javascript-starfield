# File and folder renamer (FFR)

(Original Vietnamese below)

_File and folder renamer (FFR) is a Python tool designed to automate the renaming of files and folders. It supports multiple renaming options, including date based formats, size-based formats, sequential numbering, adding custom characters, and random names. Ideal for organizing files and folders efficiently with customizable workflows._

## Installation Guide

To install, clone this repository and run the Python script directly:

```
npm i folder-attribute
```

No additional dependencies are required beyond the Python standard library.

## Purpose

– Rename files and folders based on current date and time with sequential numbering.

– Rename files with their size (in KB) appended to the name.

– Assign custom prefixes with sequential numbers.

– Add custom characters to the beginning or end of names.

– Generate random names for files and folders.

## Workflow

1. Select location: Input `1` to rename folders and subfolders, `2` to rename files in a folder, or `0` to exit. No default value; users must choose explicitly.

2. Specify directory: Enter the path to the target folder or leave blank to use the current directory (`.`). Defaults to the current directory for convenience.

3. Choose feature: Select a renaming option:

– `1`: Rename using a format (proceed to step 4).

– `2`: Add custom characters (proceed to step 4).

– `3`: Rename randomly (proceed to step 5).

– `0`: Go back to the previous step.

4. Configure feature:

For format-based renaming (`1`):

– Choose format: `1` for `yyyymmdd-hhmmss` (e.g., `20250409-123456-0000`), `2` for `yyyymmdd-hhmmss-(size)` (e.g., `20250409-123456-3686`, size in KB), or `3` for `xxxx-(sequence)` (e.g., `file-0001`).

– For `xxxx-(sequence)`, input a custom prefix (defaults to `file`) or press `0` to go back.

For adding characters (`2`):

– Choose position: `1` to add characters before the name, `2` to add after, or `0` to go back.

– Input the characters to add (e.g., `prefix_` or `_suffix`), or press `0` to go back.

5. Process and complete: The tool processes all targeted files or folders and displays the result (e.g., _Completed! Renamed X/Y items_). Users can then choose to restart (`0`), visit the website (`1`), or Instagram (`2`). Backtracking: At any step, input `0` to return to the previous step.

## Contact & Support

– Email: info@nhavantuonglai.com.

– Website: [nhavantuonglai.com](https://nhavantuonglai.com).

If you have any questions or suggestions, feel free to reach out for the fastest support.

Don’t forget to star this repository if you find it useful!

# Công cụ đổi tên tệp và thư mục (FFR)

_Công cụ đổi tên tệp và thư mục (FFR) là một tiện ích Python tự động hóa việc đổi tên tệp và thư mục. Nó hỗ trợ nhiều tùy chọn đổi tên, bao gồm định dạng dựa trên ngày giờ, kích thước tệp, số thứ tự, thêm ký tự tùy chỉnh, và tạo tên ngẫu nhiên. Phù hợp để sắp xếp tệp và thư mục một cách hiệu quả với quy trình tùy chỉnh._

## Hướng dẫn cài đặt

Để cài đặt, sao chép repository này và chạy trực tiếp script Python:

```
npm i folder-attribute
```

Không yêu cầu thêm thư viện phụ thuộc ngoài thư viện chuẩn của Python.

## Công dụng

– Đổi tên tệp và thư mục dựa trên ngày giờ hiện tại với số thứ tự tăng dần.

– Đổi tên tệp kèm theo kích thước (tính bằng KB).

– Gán tiền tố tùy chỉnh với số thứ tự.

– Thêm ký tự tùy chỉnh vào đầu hoặc cuối tên.

– Tạo tên ngẫu nhiên cho tệp và thư mục.

## Flow thao tác

1. Chọn vị trí: Nhập `1` để đổi tên thư mục và thư mục con, `2` để đổi tên tệp trong thư mục, hoặc `0` để thoát. Không có giá trị mặc định; người dùng phải chọn rõ ràng.

2. Chỉ định thư mục: Nhập đường dẫn đến thư mục mục tiêu hoặc để trống để dùng thư mục hiện tại (`.`). Mặc định là thư mục hiện tại để tiện lợi.

3. Chọn tính năng: Chọn tùy chọn đổi tên:

– `1`: Đổi tên theo định dạng (chuyển sang bước 4).

– `2`: Thêm ký tự tùy chỉnh (chuyển sang bước 4).

– `3`: Đổi tên ngẫu nhiên (chuyển sang bước 5).

– `0`: Quay lại bước trước.

4. Cấu hình tính năng:

Đổi tên theo định dạng (`1`):

– Chọn định dạng: `1` cho `yyyymmdd-hhmmss` (Ví dụ: `20250409-123456-0000`), `2` cho `yyyymmdd-hhmmss-(kích thước)` (Ví dụ: `20250409-123456-3686`, kích thước bằng KB), hoặc `3` cho `xxxx-(số thứ tự)` (Ví dụ: `file-0001`).

– Với `xxxx-(số thứ tự)`, nhập tiền tố tùy chỉnh (mặc định là `file`) hoặc nhấn `0` để quay lại.

Thêm ký tự (`2`):

– Chọn vị trí: `1` để thêm ký tự trước tên, `2` để thêm sau tên, hoặc `0` để quay lại.

– Nhập ký tự cần thêm (Ví dụ: `prefix_` hoặc `_suffix`), hoặc nhấn `0` để quay lại.

5. Xử lý và hoàn tất: Công cụ xử lý tất cả tệp hoặc thư mục được chọn và hiển thị kết quả (Ví dụ: _Hoàn tất! Đã đổi tên X/Y mục_). Sau đó, người dùng có thể chọn chạy lại (`0`), truy cập website (`1`), hoặc Instagram (`2`). Quay lại: Tại bất kỳ bước nào, nhập `0` để trở về bước trước.

## Liên hệ & Hỗ trợ

– Email: info@nhavantuonglai.com.

– Website: [nhavantuonglai.com](https://nhavantuonglai.com).

Nếu bạn có câu hỏi hoặc đề xuất, đừng ngần ngại liên hệ để được hỗ trợ nhanh nhất.

Đừng quên star repository này nếu bạn thấy nó hữu ích!