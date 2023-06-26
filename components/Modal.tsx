"use client";

import {ReactNode, useRef} from "react";
import {useRouter} from "next/navigation";

const Modal = ({children}: {children: ReactNode}) => {
    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);

    const router = useRouter();

    return <div ref={overlay}>
        <div>
            {children}
        </div>
    </div>
}

export default Modal;