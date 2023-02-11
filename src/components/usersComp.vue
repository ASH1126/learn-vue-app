<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="mt-3">Users All</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Security from './security.js'
import notie from 'notie'
import { store } from './store.js'

export default {
    data() {
        return {
            users: [],
            ready: false,
            store,
        }
    },
    beforeMount() {
        Security.requireToken();

        fetch(process.env.VUE_APP_API_URL + "/admin/users", Security.requestOptions(""))
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    this.$emit('error', response.message);
                } else {
                    this.users = response.data.users;
                    this.ready = true;
                }
            })
            .catch((error) => {
                this.$emit('error', error);
            });
    },
    methods: {
        logUserOut(id) {
            if (id !== store.user.id) {
                notie.confirm({
                    text: "Are you sure you want to log this user out?",
                    submitText: "Log Out",
                    submitCallback: () => {
                        console.log("Would log out user id", id);
                        fetch(process.env.VUE_APP_API_URL + "/admin/log-user-out/" + id, Security.requestOptions(""))
                            .then((response) => response.json())
                            .then((data) => {
                                if (data.error) {
                                    this.$emit('error', data.message);
                                } else {
                                    this.$emit('success', data.message);
                                    this.$emit('forceUpdate');
                                }
                            })
                    }
                })
            } else {
                this.$emit('error', "You can't log yourself out!");
            }
        }
    }
}
</script>