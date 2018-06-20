/**
 * Test the github function
 */

import githubService from '../github.services';

describe('github', () => {
  describe('stubbing successful response', () => {
    it('should format the response correctly', (done) => {
      const username = 'tetris';
      githubService('/search/repositories', {
        method: 'GET'
      }, { q: username, per_page: 6 })
        .catch((error) => done(error))
        .then((json) => {
          expect(json.total_count).toBeGreaterThan(-1);
          expect(json.items).toBeDefined();
          expect(json.items.length).toBe(6);
          done();
        });
    });
  });

  describe('stubbing error response', () => {
    it('should catch errors', (done) => {
      githubService('/search/repositories', {
        method: 'GET'
      }, {
      }).catch((err) => {
        expect(err.response.status).toBe(422);
        expect(err.response.statusText).toBe('Unprocessable Entity');
        done();
      });
    });
  });
});
