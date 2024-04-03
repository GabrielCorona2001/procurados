let people = []

const createPerson = (req, res) => {
    const { name, faction, role, operation, dateBirth, cityBirth, vulgo, description } = req.body;
    const newPerson = { name, faction, role, operation, dateBirth, cityBirth, vulgo, description }
    people.push(newPerson);
    res.json(newPerson)
}

const getPeople = (req, res) => {
    res.json(people);
}

export {  createPerson, getPeople }