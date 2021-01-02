"use strict";
export { filtrator };

function filtrator(occurrences, type) {
        //confirmar o tipo
        console.log(type);
        console.log(occurrences)
        let occurrencesFil = [];

        // Get the current date
        let today = new Date();



        if (type === 0) {
            for (const occurrence of occurrences) {
                
                if (DateDiff.inDays(new Date(occurrence.arrival), today) <= 7){
                    //cofirmar a ocorrencia
                    console.log(occurrence)
                occurrencesFil.push(occurrence);
                }
            }

        }
        else
            if (type === 1) {
                for (const occurrence of occurrences) {
                    if (DateDiff.inMonths( new Date(occurrence.arrival), today) == 1) {
                        //cofirmar a ocorrencia
                        console.log(occurrence);
                    occurrencesFil.push(occurrence);
                    }
                }

            }
            else
                if (type === 2) {
                    for (const occurrence of occurrences) {
                        console.log(DateDiff.inYears(new Date(occurrence.arrival), today))
                        if (DateDiff.inYears(new Date(occurrence.arrival), today) == 1) {
                            //cofirmar a ocorrencia
                            console.log(occurrence);
                        occurrencesFil.push(occurrence);
                        }
                    }

                }

        return occurrencesFil;
    }


    // Date difference
    let DateDiff = {

        inDays: function (d1, d2) {
            let t2 = d2.getTime();
            let t1 = d1.getTime();

            return parseInt((t2 - t1) / (24 * 3600 * 1000));
        },

        inWeeks: function (d1, d2) {
            let t2 = d2.getTime();
            let t1 = d1.getTime();

            return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
        },

        inMonths: function (d1, d2) {
            let d1Y = d1.getFullYear();
            let d2Y = d2.getFullYear();
            let d1M = d1.getMonth();
            let d2M = d2.getMonth();

            return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
        },

        inYears: function (d1, d2) {
            return d2.getFullYear() - d1.getFullYear();
        }
    }