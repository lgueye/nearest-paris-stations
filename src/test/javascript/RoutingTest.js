describe("routing should succeed", function() {
    it("location tip should hide/show on mouseover", function() {
        loadFixtures("location-tip.html")
        expect($('#location-tip')).toBeVisible();
        expect($('#location-tip')).toBeHidden();
        $('#location-tip').trigger('mouseover');
//        $('#location-tip').trigger('mouseover');
//        expect($('#location-tip')).toBeHidden();
    });
})
