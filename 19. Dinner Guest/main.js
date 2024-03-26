"use strict";
//Q.19) Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let Guest_list = ['Wahid', 'Hannan', 'Ahmed'];
// for(let i=0;  i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Wahid';
let new_Guest = 'Anas';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
// console.log(` Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We find big table so we are inviting 3 more guests.')
Guest_list.unshift('Hammad');
Guest_list.splice(2, 0, 'Iqbal');
Guest_list.push('Bilal');
// for (let i = 0; i < Guest_list.length; i++) {
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log('\nSorry we are not arrange big table, Only two peoples will be invited.');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    //     console.log(`Sorry Mr. ${remove_Guest}, You are not invited for dinner.`);
}
// for (let i = 0; i < Guest_list.length; i++) {
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
// }
Guest_list.splice(0, 2);
console.log(Guest_list);
//Exercise 19 
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest are ${Guest_list.length}`);
