import { createRouter, createWebHistory } from 'vue-router'
import bodyComp from './../components/bodyComp.vue'
import Login from './../components/loginComp.vue'
import booksComp from '../components/booksComp.vue'
import bookComp from '../components/bookComp.vue'
import bookAdminComp from '../components/booksAdminComp.vue'
import bookEditComp from '../components/bookEditComp.vue'
import usersComp from '../components/usersComp.vue'
import userEditComp from '../components/userEditComp.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: bodyComp,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/books',
        name: 'Books',
        component: booksComp,
    },
    {
        path: '/books/:bookName',
        name: 'Book',
        component: bookComp,
    },
    {
        path: '/admin/books',
        name: 'BooksAdmin',
        component: bookAdminComp,
    },
    {
        path: '/admin/books/:bookId',
        name: 'BookEdit',
        component: bookEditComp,
    },
    {
        path: '/admin/users',
        name: 'Users',
        component: usersComp,
    },
    {
        path: '/admin/users/:userId',
        name: 'User',
        component: userEditComp,
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router