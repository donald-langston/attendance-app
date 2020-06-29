function generateId(firstInitial, lastInitial) {
    let id = firstInitial + lastInitial;
    for(let i = 0; i < 6; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

export default generateId;