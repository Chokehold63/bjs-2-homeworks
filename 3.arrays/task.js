function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((element, index) => {
        return element === arr2[index];
    });
}

function getUsersNamesInAgeRange(users, gender) {
    let filteredUsers = users.filter((user) => {
        return user.gender === gender;
    })
    let ages = filteredUsers.map((user) => {
        return user.age;
    })
    let sum = ages.reduce((acc, age) => {
        return acc + age;
    }, 0)
    if (ages.length ===0) {
        return 0;
    }
    let ave = sum / ages.length;
    return ave;
}