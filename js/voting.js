$(document).ready(function () {

    var listOfWebsites = [];
    buildWebsiteList();
    displayListInTable();

    function buildWebsiteList() {
        listOfWebsites.push({
            "name": "sack-zonked-sour.com",
            "votes": 0
        });
        listOfWebsites.push({
            "name": "ignore-imminent.org",
            "votes": 0
        });
        listOfWebsites.push({
            "name": "land-ferry-mouse.net",
            "votes": 0
        });
        listOfWebsites.push({
            "name": "roof-feigned-tree.com",
            "votes": 0
        });
        listOfWebsites.push({
            "name": "trampl-aboard.com",
            "votes": 0
        });
        listOfWebsites.push({
            "name": "lyric-aldreary.com",
            "votes": 0
        });
        listOfWebsites.push({
            "name": "enchanted-greasy-goose.gov",
            "votes": 0
        });
        listOfWebsites.push({
            "name": "respect-real-flippant.com",
            "votes": 0
        });
        listOfWebsites.push({
            "name": "scan-dinner-materialistic.org",
            "votes": 0
        });
        listOfWebsites.push({
            "name": "bread-card-fetch.net",
            "votes": 0
        });
    };

    function displayListInTable() {
        var table = document.getElementById('website-list');

        // If the table has any rows we need to remove them all.
        while (table.hasChildNodes()) {
            table.removeChild(table.firstChild);
        }

        var tableHeader = document.createElement('th');
        tableHeader.innerHTML = 'Name';

        // Generate the Table based off of the listOfWebsites
        listOfWebsites.forEach(function (website) {

            var tableRow = document.createElement('tr');
            tableRow.innerHTML = '<td class="names">' + website.name + '</td>' +
                '<td class="votes">' + website.votes + '</td>' +
                '<td class="buttons"><button id="upvote" class="grey">+</button><button id="downvote" class="black">-</button></td>';
            tableRow.id = website.name;

            table.appendChild(tableRow);
        });
    }

    function vote(amount, e) {

        var tableRow = $(e.currentTarget).closest('tr')[0].id;
        var websiteRecord = listOfWebsites.find(website => website.name === tableRow);
        websiteRecord.votes = websiteRecord.votes + amount;
        updateList();
    };

    var updateList = function () {
        listOfWebsites = listOfWebsites.sort(compare);
        displayListInTable();
    }

    var compare = function (a, b) {
        const votesA = a.votes;
        const votesB = b.votes;

        let comparison = 0;

        if (votesA > votesB) {
            comparison = -1;
        } else if (votesA < votesB) {
            comparison = 1;
        }

        return comparison;
    }

    $(document).on('click', '#upvote', function (e) { vote(1, e); });
    $(document).on('click', '#downvote', function (e) { vote(-1, e); });

});

