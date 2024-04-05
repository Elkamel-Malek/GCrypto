import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const chaptersData = [
    { courseId: 1, id: 1, title: 'Chapter 1: Introduction to Bitcoin', content: 'Introduction to the basics of Bitcoin.', videoUrl: 'https://www.youtube.com/watch?v=SXqfFTmYmT0.mp4https://youtu.be/SXqfFTmYmT0' },
    { courseId: 1, id: 2, title: 'Chapter 2: Bitcoin Mining', content: 'Learn about the process of Bitcoin mining.', videoUrl: 'https://www.example.com/video2.mp4' },
    { courseId: 1, id: 3, title: 'Chapter 3: Bitcoin Transactions', content: 'Understanding how transactions work in Bitcoin.', videoUrl: 'https://www.example.com/video3.mp4' },
    { courseId: 1, id: 4, title: 'Chapter 4: Bitcoin Wallets', content: 'Types of wallets used to store Bitcoin.', videoUrl: 'https://www.example.com/video4.mp4' },
    { courseId: 2, id: 3, title: 'Chapter 1: Introduction', content: 'Introduction to the course.', videoUrl: 'https://www.example.com/video5.mp4' },
    { courseId: 2, id: 4, title: 'Chapter 2: Basics', content: 'Basic concepts covered in the course.', videoUrl: 'https://www.example.com/video6.mp4' },
    { courseId: 3, id: 5, title: 'Chapter 1: Introduction', content: 'Introduction to the course.', videoUrl: 'https://www.example.com/video7.mp4' },
    { courseId: 3, id: 6, title: 'Chapter 2: Basics', content: 'Basic concepts covered in the course.', videoUrl: 'https://www.example.com/video8.mp4' },
    { courseId: 4, id: 7, title: 'Chapter 1: Introduction', content: 'Introduction to the course.', videoUrl: 'https://www.example.com/video9.mp4' },
    { courseId: 4, id: 8, title: 'Chapter 2: Basics', content: 'Basic concepts covered in the course.', videoUrl: 'https://www.example.com/video10.mp4' },
    { courseId: 5, id: 9, title: 'Chapter 1: Introduction', content: 'Introduction to the course.', videoUrl: 'https://www.example.com/video11.mp4' },
    { courseId: 5, id: 10, title: 'Chapter 2: Basics', content: 'Basic concepts covered in the course.', videoUrl: 'https://www.example.com/video12.mp4' },
];

const CoursePage = () => {
    const { courseId } = useParams();
    const [activeChapter, setActiveChapter] = useState(null);

    const handleChapterClick = (chapterId) => {
        setActiveChapter(activeChapter === chapterId ? null : chapterId);
    };

    // Convertir courseId en entier
    const courseIdInt = parseInt(courseId);
    const courseChapters = chaptersData.filter(chapter => chapter.courseId === courseIdInt);
    const activeChapterTitle = activeChapter ? courseChapters.find(chapter => chapter.id === activeChapter).title : '';
    const activeChapterVideoUrl = activeChapter ? courseChapters.find(chapter => chapter.id === activeChapter).videoUrl : '';

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <style>
                {`
                body, html {
                    height: 100%;
                }

                .sidebar {
                    background-color:#212529; /* Couleur foncée (dark) */
                    padding: 20px;
                    width: 300px;
                }

                .chapter-list {
                    list-style-type: none;
                    padding: 0;
                }

                .chapter-list li {
                    cursor: pointer;
                    padding: 10px;
                    border-bottom: 1px solid #ccc;
                    color: white; /* Texte blanc */
                }

                .chapter-list li:hover {
                    background-color: #555; /* Couleur de survol sombre */
                }

                .chapter-list .active {
                    background-color: #555; /* Couleur de fond active sombre */
                }

                .chapter-content {
                    padding: 10px;
                    color: white; /* Texte blanc */
                }

                .course-content {
                    padding: 20px;
                }
                `}
            </style>
            <div className="sidebar">
                
                <ul className="chapter-list">
                    {courseChapters.map(chapter => (
                        <li key={chapter.id} className={activeChapter === chapter.id ? 'active' : ''} onClick={() => handleChapterClick(chapter.id)}>
                            {chapter.title}
                            {activeChapter === chapter.id && (
                                <div className="chapter-content">
                                    {chapter.content}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="course-content">
                <h2>{activeChapterTitle}</h2>
                {/* Section de la vidéo */}
                {activeChapterVideoUrl && (
                    <video controls width="200%" height="auto">
                        <source src={activeChapterVideoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}

            </div>
        </div>
    );
};

export default CoursePage;
