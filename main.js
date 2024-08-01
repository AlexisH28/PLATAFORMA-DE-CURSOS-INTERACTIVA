    document.addEventListener('DOMContentLoaded', () => {
        let courses = [
        { id: 1, name: 'Curso de Programación', description: 'Aprende a programar', content: 'Contenido del curso...' },
        { id: 2, name: 'Curso de Diseño', description: 'Aprende diseño gráfico', content: 'Contenido del curso...' }
        ];
    
        const courseList = document.getElementById('course-list');
        const courseDetails = document.getElementById('course-details');
        const courseForm = document.getElementById('add-edit-course');
        const formTitle = document.getElementById('form-title');
        const submitBtn = document.getElementById('submit-btn');
    
        let editingCourseId = null;
    
        // Función para renderizar la lista de cursos
        const renderCourses = () => {
        courseList.innerHTML = '';
        courses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            courseItem.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <button onclick="viewCourse(${course.id})">Ver</button>
            <button onclick="editCourse(${course.id})">Editar</button>
            <button onclick="deleteCourse(${course.id})">Eliminar</button>
            `;
            courseList.appendChild(courseItem);
        });
        };
    
        // Función para ver detalles del curso
        window.viewCourse = (id) => {
        const course = courses.find(c => c.id === id);
        courseDetails.innerHTML = `
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <p>${course.content}</p>
        `;
        };
    
        // Función para editar un curso
        window.editCourse = (id) => {
        const course = courses.find(c => c.id === id);
        document.getElementById('course-name').value = course.name;
        document.getElementById('course-description').value = course.description;
        document.getElementById('course-content').value = course.content;
        editingCourseId = id;
        formTitle.textContent = 'Editar Curso';
        submitBtn.textContent = 'Actualizar';
        };
    
        // Función para eliminar un curso
        window.deleteCourse = (id) => {
        courses = courses.filter(c => c.id !== id);
        renderCourses();
        };
    
        // Evento para agregar o editar curso
        courseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('course-name').value;
        const description = document.getElementById('course-description').value;
        const content = document.getElementById('course-content').value;
    
        if (editingCourseId) {
            const index = courses.findIndex(c => c.id === editingCourseId);
            courses[index] = { id: editingCourseId, name, description, content };
            editingCourseId = null;
            formTitle.textContent = 'Agregar Curso';
            submitBtn.textContent = 'Guardar';
        } else {
            courses.push({ id: Date.now(), name, description, content });
        }
    
        courseForm.reset();
        renderCourses();
        });
    
        // Renderizar cursos iniciales
        renderCourses();
    });