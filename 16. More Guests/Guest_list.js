var Guest_list = ['Wahid', 'Hannan', 'Ahmed'];
// for(let i=0;  i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
var absent_Guest = 'Wahid';
var new_Guest = 'Anas';
Guest_list[0] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(" Mr. ".concat(absent_Guest, " is not coming to the party."));
console.log('Good News! We find big table so we are inviting 3 more guests.');
Guest_list.unshift('Hammad');
Guest_list.splice(2, 0, 'Iqbal');
Guest_list.push('Bilal');
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
