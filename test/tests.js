/**
 * Please use the file "js/functions.js" for your functions.
 *
 */


describe('Test Suite - Test your own functions with edge cases', () => {
    it('An url will be parsed an return all the parts in an object.', function(){
        let analysis = analyseUrl('https://it-club-oberland.ch#section');
        
        analysis.schema.should.be.equal('https');
        analysis.host.should.be.equal('it-club-oberland.ch');
        analysis.fragment.should.be.equal('section');
    });
      
    it('An url will be parsed an return all the parts in an object.', function(){
        let analysis = analyseUrl('http://localhost:8080/api?sort=ASC');
        
        analysis.schema.should.be.equal('http');
        analysis.host.should.be.equal('localhost');
        analysis.port.should.be.equal('8080');
        analysis.path.should.be.equal('api');
        analysis.query.should.be.equal('sort=ASC');
    });
});





describe('Test Suite - Test your own functions with edge cases', () => {
    it('Find polindrom words in sentence 1', function(){
        let words = findPalindroms('Nerdesin kacak? Neden gelmedin ama?');

        words.query.should.be.deepEqual(['kacak', 'neden', 'ama']);
    });
    
    it('Find polindrom words in sentence 2', function(){
        let words = findPalindroms('The radar can refer a level.');

        words.query.should.be.deepEqual(['radar', 'refer', 'level']);
    });
});