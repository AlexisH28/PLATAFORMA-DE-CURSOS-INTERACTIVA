    document.addEventListener('DOMContentLoaded', function() {
        // Array de cursos iniciales
        var courses = [
        { id: 1, name: 'Curso de Programación', description: 'Aprende a programar', content: 'Contenido del curso...' },
        { id: 2, name: 'Curso de Diseño', description: 'Aprende diseño gráfico', content: 'Contenido del curso...' }
        ];
    
        var courseList = document.getElementById('course-list');
        var courseDetails = document.getElementById('course-details');
        var courseForm = document.getElementById('add-edit-course');
        var formTitle = document.getElementById('form-title');
        var submitBtn = document.getElementById('submit-btn');
    
        var editingCourseId = null;

        function renderCourses() {
        courseList.innerHTML = '';
        for (var i = 0; i < courses.length; i++) {
            var course = courses[i];
            var courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            courseItem.innerHTML = '<h3>' + course.name + '</h3>' +
                                '<p>' + course.description + '</p>' +
                                '<button onclick="viewCourse(' + course.id + ')">Ver</button>' +
                                '<button onclick="editCourse(' + course.id + ')">Editar</button>' +
                                '<button onclick="deleteCourse(' + course.id + ')">Eliminar</button>';
            courseList.appendChild(courseItem);
        }
        }
    
        // Función para ver detalles del curso
        window.viewCourse = function(id) {
        var course = courses.find(function(c) { return c.id === id; });
        if (course) {
            courseDetails.innerHTML = '<h2>' + course.name + '</h2>' +
                                    '<p>' + course.description + '</p>' +
                                    '<p>' + course.content + '</p>';
        }
        };
    
        // Función para editar un curso
        window.editCourse = function(id) {
        var course = courses.find(function(c) { return c.id === id; });
        if (course) {
            document.getElementById('course-name').value = course.name;
            document.getElementById('course-description').value = course.description;
            document.getElementById('course-content').value = course.content;
            editingCourseId = id;
            formTitle.textContent = 'Editar Curso';
            submitBtn.textContent = 'Actualizar';
        }
        };
    
        // Función para eliminar un curso
        window.deleteCourse = function(id) {
        courses = courses.filter(function(c) { return c.id !== id; });
        renderCourses();
        };
    
        // Evento para agregar o editar curso
        courseForm.onsubmit = function(e) {
        e.preventDefault();
        var name = document.getElementById('course-name').value;
        var description = document.getElementById('course-description').value;
        var content = document.getElementById('course-content').value;
