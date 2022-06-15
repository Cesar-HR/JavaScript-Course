// Optional Chaining

const people = [
    {
        name: 'jhon',
        location:
        {
            street: '123 main street',
            timezone:
            {
                offset: '+7:00'
            }
        }
    },
    {
        name: 'peter',
        location:
        {
            street: '123 pine street'
        }
    },
    {
        name: 'susan',
        location:
        {
            street: '123 apple street',
            timezone:
            {
                offset: '+9:00'
            }
        }
    }
];

people.forEach((people) => {
    // console.log(people.name);
    // console.log(
    //     people.location &&
    //     people.location.timezone &&
    //     people.location.timezone.offset
    // );
    console.log(people?.location?.timezone?.offset);
});