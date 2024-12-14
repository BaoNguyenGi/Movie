const url = "https://jsonplaceholder.typicode.com/photos";
// phương thức lấy dữ liệu từ url
fetch(url)
  // chuyển dữ liệu vừa lấy được thành dạng JSON
  .then((res) => res.json())
  // xử lý dữ liệu đó
  .then((data) => {
    // tạo ra biến photoHTML lưu giá trị
    // duyệt qua từng phần tử của mảng data
    const photoHTML = data
      .map((photo, index) => {
        // kiểm tra nếu duyệt đủ 10 phần tử thì dừng
        if (index < 10) {
          return `
                    <div style="margin-bottom: 20px;">
                        <h2>${photo.title}</h2>
                        <img src="${photo.url}" alt="${photo.title}" width="300">
                    </div>
                `;
        }
      })
      .join("");

    document.body.innerHTML = `<h1>Danh Sách Ảnh</h1>${photoHTML}`;
  })
  .catch((err) => console.error("Lỗi:", err));
