import { expect } from 'chai';
import 'mocha'
import { SearchEngine } from '../src/search/SearchEngine'


describe('Search Engine tests', () => {
    it('should return some results', () => {
        var engine = new SearchEngine();

        var results = engine.getResults();

        expect(results).to.not.be.null;

        expect(results.length).to.be.greaterThan(0);
    })
})