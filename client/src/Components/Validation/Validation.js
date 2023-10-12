const validate = (input) => {
    let errors = {};
    let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;
    
    if (!input.name) {
        errors.name = "Name is required";
    }
    if (input.name.length > 10) {
        errors.name = "Should be less than 10 characters";
    }

    if (!regexImage.test(input.image)) errors.image = "Enter a valid URL";
    if (!input.image) errors.image = "Image cannot be empty";

    if (!input.hp) {
        errors.hp = "Cannot be empty";
    }
    if (input.hp <= 0) {
        errors.hp = "Cannot be less than 0";
    }

    if (input.attack === "") {
        errors.attack = "Cannot be empty";
    }

    if (input.defense === "") {
        errors.defense = "Cannot be empty";
    }

    if (input.hp <= 0) {
        errors.hp = "Cannot be less than 0";
    }

    if (input.attack <= 0) {
        errors.attack = "Cannot be less than 0";
    }

    if (input.defense <= 0) {
        errors.defense = "Cannot be less than 0";
    }

    if (input.speed < 0) {
        errors.speed = "Cannot be less than 0";
    }

    if (input.height < 0) {
        errors.height = "Cannot be less than 0";
    }

    if (input.weight < 0) {
        errors.weight = "Cannot be less than 0";
    }

    if (!/^([0-9])*$/.test(input.weight) && input.weight) {
        errors.weight = "Only numbers are allowed";
    }

    if (!/^([0-9])*$/.test(input.height) && input.height) {
        errors.height = "Only numbers are allowed";
    }

    if (!/^([0-9])*$/.test(input.hp)) {
        errors.hp = "Only numbers are allowed";
    }

    if (!/^([0-9])*$/.test(input.attack)) {
        errors.attack = "Only numbers are allowed";
    }

    if (!/^([0-9])*$/.test(input.defense)) {
        errors.defense = "Only numbers are allowed";
    }

    if (!/^([0-9])*$/.test(input.speed) && input.speed) {
        errors.speed = "Only numbers are allowed";
    }

    if (input.types.length <= 0) {
        errors.types = "You must choose at least 2 types";
    }
    if (input.types.length >= 3) errors.types = "You cannot choose more than 2 types";

    if (!errors.types) errors.types = [];

    return errors;
};

export default validate;
