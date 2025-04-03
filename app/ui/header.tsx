

import {  alice } from "./fonts"

export default function Header({ text, customClass }: {
    text: string,
    customClass?: string
}) {
    return (
      <p
        className={`${alice.className} text-4xl custom-color-1 leading-8 ${customClass}`}>
        {text}
      </p>
    );
}