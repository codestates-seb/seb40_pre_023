
export { fakeBackend };

// array in local storage for registered users
const usersKey = 'react-recoil-registration-login-example-users';
let users = JSON.parse(localStorage.getItem(usersKey)) || [];

function fakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/users/authenticate') && opts.method === 'POST':
                        return authenticate();
                    case url.endsWith('/users/register') && opts.method === 'POST':
                        return register();
                    case url.endsWith('/users') && opts.method === 'GET':
                        return getUsers();
                    case url.match(/\/users\/\d+$/) && opts.method === 'GET':
                        return getUserById();
                    case url.match(/\/users\/\d+$/) && opts.method === 'PUT':
                        return updateUser();
                    case url.match(/\/users\/\d+$/) && opts.method === 'DELETE':
                        return deleteUser();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function authenticate() {
                const { username, password } = body();
                const user = users.find(x => x.username === username && x.password === password);

                if (!user) return error('Username or password is incorrect');

                return ok({
                    ...basicDetails(user),
                    token: 'fake-jwt-token'
                });
            }

            function register() {
                const user = body();
    
                if (users.find(x => x.username === user.username)) {
                    return error('Username "' + user.username + '" is already taken')
                }
    
                user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                users.push(user);
                localStorage.setItem(usersKey, JSON.stringify(users));
                return ok();
            }
    
            function getUsers() {
                if (!isAuthenticated()) return unauthorized();
                return ok(users.map(x => basicDetails(x)));
            }

            function getUserById() {
                if (!isAuthenticated()) return unauthorized();
    
                const user = users.find(x => x.id === idFromUrl());
                return ok(basicDetails(user));
            }
    
            function updateUser() {
                if (!isAuthenticated()) return unauthorized();
    
                let params = body();
                let user = users.find(x => x.id === idFromUrl());
    
                // only update password if entered
                if (!params.password) {
                    delete params.password;
                }
    
                // update and save user
                Object.assign(user, params);
                localStorage.setItem(usersKey, JSON.stringify(users));
    
                return ok();
            }
    
            function deleteUser() {
                if (!isAuthenticated()) return unauthorized();
    
                users = users.filter(x => x.id !== idFromUrl());
                localStorage.setItem(usersKey, JSON.stringify(users));
                return ok();
            }
    
            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) })
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
            }

            function basicDetails(user) {
                const { id, username  } = user;
                return { id, username };
            }
    
            function isAuthenticated() {
                return opts.headers['Authorization'] === 'Bearer fake-jwt-token';
            }

            function body() {
                return opts.body && JSON.parse(opts.body);    
            }

            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }
        });
    }
}
