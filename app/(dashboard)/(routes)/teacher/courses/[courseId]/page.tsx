import React, {FC} from 'react';

interface CourseIdPageProps {
    params: {
        courseId: string
    }
    sampleText: string
}

const CourseIdPage: FC<CourseIdPageProps> = ({
    params: {courseId},
    sampleText = 'Andrew'
}) => {
     return (
        <div>
            <p>The course name: {courseId}</p>
            <p className="text-blue-700 text-7xl">{sampleText}</p>
        </div>
    );
};

export default CourseIdPage;