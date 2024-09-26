const url = "https://vvri.pythonanywhere.com/api/courses";

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            let id = document.querySelector(".courseId");
            let name = document.querySelector(".courseName");
            let student = document.querySelector(".courseStudent");

            id.innerHTML += `<p>${element.id}</p>`;
            
            if (element.name) {
                name.innerHTML += `<p>${element.name}</p>`;
            } else {
                name.innerHTML += `<p>&nbsp;</p>`; 
            }
            
            if (element.students && element.students.length > 0) {
                student.innerHTML += `<p>${element.students.map(s => s.name).join(', ')}</p>`;
            } else {
                student.innerHTML += `<p>&nbsp;</p>`;
            }
        });
    })
    .catch(error => console.log("Hiba történt: " + error));
