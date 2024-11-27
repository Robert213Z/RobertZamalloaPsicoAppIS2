import React, { useState } from 'react';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import Button from '../components/Button';
import { buscarCuestionarios } from '../services/api';

function EnviarTestPage() {
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [tests, setTests] = useState([]);
    const [selectedTest, setSelectedTest] = useState(null);

    const handleSearchTests = async (query) => {
        try {
            const data = await buscarCuestionarios(query);
            setTests(data);
        } catch (error) {
            setMessage('Error al buscar cuestionarios');
            setAlertType('error');
        }
    };

    const handleSendTest = async () => {
        if (!selectedTest) {
            setMessage('Por favor, seleccione un test para enviar.');
            setAlertType('error');
            return;
        }

        try {
            setMessage(`Test ${selectedTest.titulo} enviado exitosamente.`);
            setAlertType('success');
        } catch (error) {
            setMessage('Error al enviar el test.');
            setAlertType('error');
        }
    };

    return (
        <div>
            <Heading level={1}>Enviar Test Diagnóstico</Heading>
            {message && <Alert type={alertType}>{message}</Alert>}
            <div>
                <h3>Buscar cuestionarios:</h3>
                <input
                    type="text"
                    placeholder="Buscar..."
                    onChange={(e) => handleSearchTests(e.target.value)}
                />
                <ul>
                    {tests.map((test) => (
                        <li key={test.id}>
                            <label>
                                <input
                                    type="radio"
                                    name="test"
                                    value={test.id}
                                    onChange={() => setSelectedTest(test)}
                                />
                                {test.titulo}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <Button onClick={handleSendTest} variant="primary">
                Enviar Test
            </Button>
        </div>
    );
}

export default EnviarTestPage;
