$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })
  
const students = [
  { id: 1, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
  { id: 2, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
  { id: 3, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
  { id: 4, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
  { id: 5, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
  { id: 6, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
  { id: 7, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
  { id: 8, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
  { id: 9, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
  { id: 10, name: "Nguyễn Quỳnh Anh", msv: "B18DCCN025", class: "D18CNPM1", gpa: 2.5},
]
const table = document.getElementById("table-students")
students.map((student) => table.innerHTML += `
  <tr>
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.msv}</td>
    <td>${student.class}</td>
    <td>${student.gpa}</td>
  </tr>
`)

const prices = [
  { id: 1, code: "INT1405", name: "Các hệ thống phân tán", number: 3, pricing: "1.440.000	VNĐ"},
  { id: 2, code: "INT1434", name: "Lập trình web", number: 3, pricing: "1.440.000	VNĐ"}, 
  { id: 3, code: "INT1433", name: "Lập trình mạng", number: 3, pricing: "1.440.000	VNĐ"},
  { id: 4, code: "INT1450", name: "Quản lý dự án phần mềm", number: 2, pricing: "960.000 VNĐ"},
  { id: 5, code: "INT1342M", name: "Phân tích và thiết kế hệ thống thông tin", number: 3, pricing: "1.440.000	VNĐ"},
  { id: 6, code: "INT1414", name: "Cơ sở dữ liệu phân tán", number: 2, pricing: "960.000 VNĐ"},
]

const list = document.getElementById("table-price")
prices.map((price) => list.innerHTML += `
  <tr>
    <td style="border-top: 0">${price.id}</td>
    <td style="border-top: 0">${price.code}</td>
    <td style="border-top: 0">${price.name}</td>
    <td style="border-top: 0">${price.number}</td>
    <td style="border-top: 0">${price.pricing}</td>
  </tr>
`)