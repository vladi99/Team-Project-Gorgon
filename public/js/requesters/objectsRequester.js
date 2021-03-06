const objectsRequester = function(genericRequester) {
    const requester = genericRequester;
    if(!requester) {
        throw 'Requester provider cannot be null.';
    }

    function getObjectsPage(directory, pageNumber) {
        return requester.get(`${directory}/${pageNumber}`)
    }

    function addNewObject(directory, objectData) {
        return requester.post(directory, objectData);
    }

    function getSpecificObject(directory, searchParams) {
        return requester.put(directory, searchParams);
    }

    function editSpecificObject(directory, info) {
        return requester.patch(directory, info);
    }

    function searchAllObjects(name) {
        return requester.search('api/all', {name: name});
    }

    // more

    return {
        getObjectsPage: getObjectsPage,
        addNewObject: addNewObject,
        getSpecificObject: getSpecificObject,
        editSpecificObject: editSpecificObject,
        searchAllObjects: searchAllObjects
    };
};

export { objectsRequester };