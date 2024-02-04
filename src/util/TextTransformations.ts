export function passwordText(text: string) {
    let ret = "";

    for (let i=0; i < text.length; i++) {
        const c = text.charAt(i);
        if (c === ' ') {
            ret += ' ';
        } else {
            ret += '•';
        }
    }

    return ret;
}