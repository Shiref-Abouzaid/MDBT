<template>
<!--chat box-->
<b-col sm="9" class="pl-sm-2">
    <div class="chat-box chat-messages-box mb-sm-5">
        <div class="chat-header friend-list-header">
            <b-row>
                <b-col sm="3">
                    <div class="title">Friends List</div>
                </b-col>
                <b-col sm="6">
                    <b-input-group>
                        <template #prepend>
                            <b-input-group-text>
                                    <b-img src="/images/icons/svg/social-search.svg" alt="icon"/>
                            </b-input-group-text>
                        </template>
                        <b-form-input type="text" placeholder="Search by name or mobile number"></b-form-input>
                    </b-input-group>
                </b-col>

            </b-row>
        </div>


        <!--messages box-->
        <b-row>
            <!--if media is open or closed -->
            <b-col cols="12"   class="scroll-container">

                <div class="scrollable-box-messages">
                    <div class="friends-lists">
                        <b-row>
                            <b-col sm="4" v-for="(s, index) in 9" :key="index">
                                <div class="friend-card">
                                    <b-img class="profile-img" src="https://data.whicdn.com/images/327256690/original.jpg" alt="icon"/>
                                    <div class="name color-night">Tom Hanks</div>
                                    <div class="w-100 mt-3">
                                        <b-button variant="default" class="bg-red-opacity-1 w-100 no-shadow color-red" >
                                            <b-img src="/images/icons/svg/social-block.svg" alt="icon"/>
                                            <span>Unblock</span>
                                        </b-button>
                                    </div>
                                </div>

                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>                   
    </div>

</b-col>
</template>