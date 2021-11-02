import randomNumber from "@utilities/randomNumber";

const generateField = () => {
    const emptyField = [];

    emptyField.length = 100;
    emptyField.fill('', 0, 100);
    
    const field = emptyField.map((item, index) => {
        const biome = randomNumber(2);

        return {
            id: index,
            biome: index > 0 ? biome : 1,
        }
    });

    return field;
};

export default generateField;