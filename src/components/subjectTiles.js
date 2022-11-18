import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadSubject } from '../store/modules/subject';

export default function SubjectTiles() {
    const dispatch = useDispatch()
    const subjects = useSelector((state) => state.subject?.subjects);
  
    useEffect(() => {
        dispatch(loadSubject())
    }, [dispatch]);


    return (
        <div className='container pt-5'>
            <h3 className='text-center my-4'>Subjects</h3>
            <div className="row">
                {subjects && subjects?.length > 0 && subjects.map((sub) =>
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" key={sub.id}>
                        <Link to={`/subject/${sub.id}`} className={`card bg-${sub.color} text-white text-center mb-4 text-decoration-none`}>
                            <div className="card-body">
                                <h3 className="card-title ">{sub.name}</h3>
                                <p></p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
