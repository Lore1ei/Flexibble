"use client"
import {SessionInterface} from "@/common.types";
import React, {ChangeEvent} from "react";
import Image from "next/image";
import FormField from "@/components/FormField";

type Props = {
    type: string;
    session: SessionInterface;
}

const ProjectForm = ({type, session}: Props) => {

    const handleFormSubmit = (e: React.FormEvent) => {

    }


    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {

    }

    function handleStateChange(fieldName: string, value: string) {

    }

    const form = {
        image: '',
        title: ''
    }

    return (
        <form onSubmit={handleFormSubmit}
              className='flexStart form'
        >

            <div className='flexStart form_image-container'>
                <label htmlFor="poster" className='flexCenter form_image-label'>
                    {!form.image && 'Choose a poster for your project'}
                </label>
                <input id='image'
                       type="text"
                       accept='image/*'
                       required={type === 'create'}
                       className='form_image-input'
                       onChange={handleChangeImage}
                />
                {form.image && (
                    <Image
                        src={form?.image}
                        className='sm:p-10 object-contain z-20'
                        alt='Project poster'
                        fill
                    />
                )}
            </div>

            <FormField
                title='Title'
                state={form.title}
                placeholder='Flexibble'
                setState={(value) => handleStateChange('title', value)}
            />
        </form>
    )
}

export default ProjectForm;