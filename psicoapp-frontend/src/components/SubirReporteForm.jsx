import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function SubirReporteForm({ onSubmit }) {
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <Button type="submit" variant="primary">
                Subir Reporte
            </Button>
        </form>
    );
}

export default SubirReporteForm;
