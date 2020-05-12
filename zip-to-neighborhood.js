function getNeighborhood(zipcode) {

    // Ensure param is a string to prevent unpredictable parsing results
    if (typeof zipcode !== 'string') {
        console.log('Must pass the zipcode as a string.');
        return;
    }

    // Ensure we have exactly 5 characters to parse
    if (zipcode.length !== 5) {
         console.log('Must pass a 5-digit zipcode.');
         return;
    } 

    // Ensure we don't parse strings starting with 0 as octal values
    const thiszip = parseInt(zipcode, 10); 

    let neighborhood = '';

    // approximate code blocks 
    if (thiszip >= 10115 && thiszip <= 10179) {
        neighborhood = 'Berlin-Mitte';
        }
    else if (thiszip >= 10243 && thiszip <= 10249) {
        neighborhood = 'Friedrichshain';
        }
    else if (thiszip >= 10318 && thiszip <= 10319) {
        neighborhood = 'Lichtenberg';
        }
    else if (thiszip >= 10405 && thiszip <= 10439) {
        neighborhood = 'Prenzlauer Berg';
        }
    else if (thiszip >= 10551 && thiszip <= 10559) {
        neighborhood = 'Tiergarten';
        }
    else if (thiszip >= 10585 && thiszip <= 10629) {
        neighborhood = 'Charlottenburg';
        }
    else if (thiszip >= 10707 && thiszip <= 10719) {
        neighborhood = 'Wilmersdorf';
        }
    else if (thiszip >= 10777 && thiszip <= 10789) {
        neighborhood = 'Tempelhof';
        }
    else if (thiszip >= 10823 && thiszip <= 10829) {
        neighborhood = 'Schöneberg';
        }
    else if (thiszip >= 10961 && thiszip <= 10999) {
        neighborhood = 'Kreuzberg';
        }
    else if (thiszip >= 12043 && thiszip <= 12059) {
        neighborhood = 'Neukölln';
        }
    else if (thiszip >= 12157 && thiszip <= 12169) {
        neighborhood = 'Steglitz';
        }
    else if (thiszip >= 12203 && thiszip <= 12209) {
        neighborhood = 'Lichterfelde';
        }
    else if (thiszip >= 12247 && thiszip <= 12249) {
        neighborhood = 'Lankwitz';
        }
    else if (thiszip >= 12277 && thiszip <= 12279) {
        neighborhood = 'Marienfelde';
        }
    else if (thiszip >= 12305 && thiszip <= 12309) {
        neighborhood = 'Lichtenrade';
        }
    else if (thiszip >= 12487 && thiszip <= 12489) {
        neighborhood = 'Adlershof';
        }
    else if (thiszip >= 12555 && thiszip <= 12587) {
        neighborhood = 'Köpenick';
        }
    else if (thiszip >= 12679 && thiszip <= 12689) {
        neighborhood = 'Marzahn';
        }
    else if (thiszip >= 13086 && thiszip <= 13089) {
        neighborhood = 'Weißensee';
        }
    else if (thiszip >= 13187 && thiszip <= 13189) {
        neighborhood = 'Pankow';
        }
    else if (thiszip >= 13347 && thiszip <= 13359) {
        neighborhood = 'Wedding';
        }
    else if (thiszip >= 13403 && thiszip <= 13409) {
        neighborhood = 'Reinickendorf';
        }
    else if (thiszip >= 13435 && thiszip <= 13439) {
        neighborhood = 'Wittenau';
        }
    else if (thiszip >= 14109 && thiszip <= 65999) {
        neighborhood = 'Wannsee';
        }
    else if (thiszip >= 14163 && thiszip <= 14169) {
        neighborhood = 'Zehlendorf';
        }
    else {
        neighborhood = 'outside of Berlin';
    }
    return neighborhood;
}

getNeighborhood('10115');
