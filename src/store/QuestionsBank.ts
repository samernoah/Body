let Questions = [
    {
        id: 1,
        T: "s",
        Q: "What is the Pancrease",
        A: {
            Choises: [
                { discreption: "An Organ", chosen: "Right , the Pancreas is indeen an organ", IMR: true },
                { discreption: "A System", chosen: "no not right not a system", IMR: false },
                { discreption: "A Somthing", chosen: "what?", IMR: false },
                { discreption: "Another thing", chosen: "fuck you", IMR: false },
            ]

        },
        C: false,
        CC: false
    },
    {
        id: 2,
        T: "s",
        Q: "What is the Heart",
        A: {
            Choises: [
                { discreption: "An Organ", chosen: "Right , the Pancreas is indeen an organ", IMR: true },
                { discreption: "A System", chosen: "no not right not a system", IMR: false },
                { discreption: "A Somthing", chosen: "what?", IMR: false },
                { discreption: "Another thing", chosen: "fuck you", IMR: false },
            ]
        },
        C: false,
        CC: false
    },
    {
        id: 3,
        T: "r",
        Q: "How many Chambers are there in the Heart ",
        A: {
            MostRight: { discreption: "4", chosen: "Right , the Heart does indeed have 4 chambers" },
            Others: { discreption: "", chosen: "Try again , Remember The Heart Receives Blood from two sources and Pump it to the same sources." },
        },
        C: false,
        CC: false
    },
    {
        id: 4,
        T: "m",
        Q: "Choose all the Following that exist in the Heart",
        A: {
            Choises: [
                { discreption: "Right Ventricle", chosen: "Right , the Right Ventricle is An Essential Part Of The Heart", IMR: true },
                { discreption: "AV Node", chosen: "Yes , The AV Node Is The Pace Maker Of The Heart", IMR: true },
                { discreption: "Langherhand's Islands", chosen: "what?", IMR: false },
                { discreption: "Another thing", chosen: "fuck you", IMR: false },
            ]
        },
        NOAA: 2,
        C: false,
        CC: false
    }

]

export default Questions;

