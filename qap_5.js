
// Read the file.
fetch('./xmen.json')

// Parse the JSON data.
    .then(response => response.json())

    // Create array of objects.
    .then (mutants => {

        mutants.forEach(mutant => {

            console.log(`\n Xmen to watch out for: \n
            Name:          ${mutant.fname} ${mutant.lname}
            Alias:         ${mutant.alias}
            City:          ${mutant.city}
            Power Rating:  ${mutant.powerRating}
            Power Type:    ${mutant.powerType} 
            `);
        });
    })

    // Catch any errors.
    .catch(error => console.error(error));

// End program
    