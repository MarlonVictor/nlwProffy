import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Imput';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';


function TeacherList() {
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')

    async function seachTeacher(event: FormEvent) {
        event.preventDefault()

        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(res.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis.">
                <form id="search-teachers" onSubmit={seachTeacher}>
                    <Select
                        name="subject" 
                        label="Matéria"
                        value={subject} 
                        onChange={e => setSubject(e.target.value)}
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
                        value={week_day} 
                        onChange={e => setWeek_day(e.target.value)}
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
                    <Input 
                        name="time"
                        label="Hora" 
                        type="time"
                        value={time} 
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </PageHeader>

            <main>
            {teachers.map((teacher: Teacher) => {
                return <TeacherItem key={teacher.id} teacher={teacher}/>
            })}
            </main>
        </div>
    )
}

export default TeacherList;