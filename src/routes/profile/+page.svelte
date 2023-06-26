<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
    export let form: ActionData;

</script>

<h1>PROFILE PAGE</h1>

<p>Welcome {data.user.username}!</p>

<form  action="?/update" method="POST">
    <label for="username">Username</label>
    <input name="username" type="text" value={data.user.username} />

    <label for="email">Email</label>
    <input name="email" type="email" placeholder="email" />

    <button class="btn btn-outline-primary">Update</button>
</form>
