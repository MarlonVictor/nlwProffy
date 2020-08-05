import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Imput';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis.">
                <form id="search-teachers">
                    <Select
                        name="subject" 
                        label="Matéria"
                        options={[
                            { id: 'Física', label: 'Física' },
                            { id: 'Artes', label: 'Artes' },
                            { id: 'Matemática', label: 'Matemática' },
                            { id: 'Ciências', label: 'Ciências' },
                            { id: 'Geografia', label: 'Geografia' },
                            { id: 'História', label: 'História' },
                            { id: 'Português', label: 'Português' },
                            { id: 'Inglês', label: 'Inglês' },
                            { id: 'Ed Física', label: 'Ed. Física' },
                            { id: 'Biologia', label: 'Biologia' }
                        ]}
                    />
                    <Select 
                        name="week-day" 
                        label="Dia da semana"
                        options={[
                            { id: '0', label: 'Domingo' },
                            { id: '1', label: 'Segunda-feira' },
                            { id: '2', label: 'Terça-feira' },
                            { id: '3', label: 'Quarta-feira' },
                            { id: '4', label: 'Quinta-feira' },
                            { id: '5', label: 'Sexta-feira' },
                            { id: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input name="time" label="Hora" type="time"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;