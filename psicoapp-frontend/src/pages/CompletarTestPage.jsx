import React, { useEffect, useState } from 'react';
import TestForm from '../components/TestForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import { getPreguntasCuestionario, enviarRespuestasCuestionario } from '../services/api';

function CompletarTestPage({ id }) {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const data = await getPreguntasCuestionario(id);
                setQuestions(data.preguntas);
                setLoading(false);
            } catch (error) {
                setMessage('Error al cargar las preguntas del test');
                setAlertType('error');
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [id]);

    const handleSubmitAnswers = async (answers) => {
        try {
            const response = await enviarRespuestasCuestionario(id, answers);
            setMessage(response.message || 'Test completado exitosamente');
            setAlertType('success');
        } catch (error) {
            setMessage('Error al completar el test');
            setAlertType('error');
        }
    };

    return (
        <div>
            <Heading level={1}>Completar Cuestionario Diagnóstico</Heading>
            {message && <Alert type={alertType}>{message}</Alert>}
            {loading ? <Loader /> : <TestForm questions={questions} onSubmit={handleSubmitAnswers} />}
        </div>
    );
}

export default CompletarTestPage;
