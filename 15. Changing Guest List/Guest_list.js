var Guest_list = ['Wahid', 'Hannan', 'Ahmed'];
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
var absent_Guest = 'Wahid';
var new_Guest = 'Anas';
Guest_list[0] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(" Mr. ".concat(absent_Guest, " is not coming to the party."));
