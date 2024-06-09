import React, { useState } from 'react';
function Test() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        documento: '',
        fechaNacimiento: ''
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert('Formulario enviado');
    };
    return (
        <section className="Test">
            <div className='Test-text'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="apellido">Apellido:</label>
                            <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="documento">Número de documento:</label>
                            <input
                                type="number"
                                id="documento"
                                name="documento"
                                value={formData.documento}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
                            <input
                                type="date"
                                id="fechaNacimiento"
                                name="fechaNacimiento"
                                value={formData.fechaNacimiento}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
        </section>
    )
}

export default Test;