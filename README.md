# React Base Project - Outsourcing Team

Đây là một dự án base được xây dựng bằng React, TypeScript và Vite, được cấu hình sẵn với các tính năng hiện đại để đẩy nhanh quá trình phát triển. Dự án này được thiết kế để dễ dàng mở rộng, bảo trì và thân thiện với lập trình viên.

##[object Object]n1.  **Cài đặt dependencies:**
    ```bash
    npm install
    ```

2.  **Chạy môi trường dev:**
    ```bash
    npm run dev
    ```

    Ứng dụng sẽ chạy tại `http://localhost:5173`.

## ✨ Các tính năng đã cấu hình

Dự án này được trang bị sẵn các tính năng cốt lõi:

-   **UI Framework**: Sử dụng [Ant Design](https://ant.design/) cho một hệ thống component UI đẹp và nhất quán.
-   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) để quản lý state một cách hiệu quả và dễ đoán.
-   **Routing**: [React Router v6](https://reactrouter.com/) cho việc định tuyến phía client.
-   **API Service**: [Axios](https://axios-http.com/) được cấu hình với interceptor để:
    -   Tự động làm mới token (Refresh Token).
    -   Xử lý hàng đợi cho các request đồng thời khi token hết hạn.
    -   Hiển thị thông báo lỗi chung bằng `react-hot-toast`.
-   **Internationalization (i18n)**: Hỗ trợ đa ngôn ngữ (Anh/Việt) bằng `react-i18next`.
-   **Form Handling**: [React Hook Form](https://react-hook-form.com/) kết hợp với [Zod](https://zod.dev/) để quản lý và xác thực form một cách mạnh mẽ.
-   **Code Style**: ESLint và Prettier được cấu hình để đảm bảo code luôn sạch sẽ và nhất quán.
-   **Path Alias**: Hỗ trợ alias `@/*` trỏ đến `src/*` để tránh các đường dẫn tương đối phức tạp.

## 📂 Cấu trúc thư mục

Cấu trúc thư mục được tổ chức một cách logic để dễ dàng tìm kiếm và phát triển:

```
src
├── components/      # Các component tái sử dụng
├── constants/       # Các hằng số (ví dụ: API endpoints)
├── hooks/           # Các custom hooks
├── layouts/         # Bố cục chung (Admin, Auth)
├── locales/         # Các file ngôn ngữ và cấu hình i18n
├── pages/           # Các trang của ứng dụng
├── query/           # Cấu hình React Query (nếu có)
├── routes/          # Cấu hình routing
├── services/        # Logic gọi API (axios instance, modules)
├── store/           # Cấu hình Redux Toolkit (slices, store)
├── styles/          # Các file CSS/SCSS chung
├── types/           # Các định nghĩa TypeScript chung (ví dụ: API responses)
├── utils/           # Các hàm tiện ích
└── validation/      # Các schema xác thực (Zod)
```

## 📖 Trang Dashboard (Showcase)

Để giúp lập trình viên mới nhanh chóng nắm bắt dự án, trang **Dashboard** (đóng vai trò là trang Showcase) sẽ hiển thị ngay sau khi đăng nhập.

Trang này demo trực tiếp các tính năng đã được cấu hình, bao gồm:

-   Các component UI của Ant Design.
-   Chức năng đổi ngôn ngữ.
-   Hệ thống thông báo toast.
-   Trạng thái đăng nhập.
-   Và nhiều tính năng khác.

## 📜 Scripts có sẵn

-   `npm run dev`: Chạy ứng dụng ở chế độ development.
-   `npm run build`: Build ứng dụng cho môi trường production.
-   `npm run lint`: Chạy ESLint để kiểm tra lỗi code.
-   `npm run preview`: Xem trước bản build production.

