import React, { Fragment } from 'react';

export function TodoList(){
    return (
        <Fragment>
            <h1 className='alert alert-warning'>Post It Simulator!</h1>

            <div className="mt-3 mb-3">
                <input type="text" placeholder='Titulo'/>
                <input type='text' placeholder='Descripcion'/>
                <input type='checkbox' className='form-check-input me-2'/>
                importante!
                <button className='btn btn-success'>AGREGAR</button>
            </div>
        </Fragment>
    )
}