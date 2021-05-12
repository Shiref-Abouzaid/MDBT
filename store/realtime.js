import Pusher from 'pusher-js';
// export default {

export const state = () => ({
    pusherCreated: false,
    auctionsOffers: {},
    acceptedDeals: {},
    rejectedDeals: {}
});
    
export const getters = {
    pusherCreated(state) {
        return state.pusherCreated;
    },
    auctionsOffers(state) {
        return state.auctionsOffers;
    }
};
    
export const mutations = {
    setPusherCreated(state, created) {
        state.pusherCreated = created;
    },
    setAuctionOffer(state, offer) {
        if(state.auctionsOffers[offer.auction_id]) {
            state.auctionsOffers[offer.auction_id].unshift(offer);
        } else {
            state.auctionsOffers[offer.auction_id] = [offer];
        }
        console.log('auction offers from mutation >> ', state.auctionsOffers);
    },
    setAuctionOffers(state, auction) {
        state.auctionsOffers[auction.id] = auction.deals
    },
    resetAuctionOffers(state, auctionId) {
        console.log('offers before reset >. ', state.auctionsOffers[auctionId])
        if(state.auctionsOffers[auctionId]) {
            state.auctionsOffers[auctionId] = [];
        }
        console.log('offers after reset >. ', state.auctionsOffers[auctionId])
    },
    removeDeal(state, deal) {
        let index = state.auctionsOffers[deal.auction_id].findIndex(ele => {
            return ele.id == deal.id
        });
        console.log('deal index >> ', index);
        state.auctionsOffers[deal.auction_id].splice(index, 1);
    }
};

export const actions = {
    privateUserChannel(vuexContext) {
        
        if(!vuexContext.state.pusherCreated) {
            let pusher = new Pusher(`dpctgdv35p33t63d3eva`, {
                encrypted: false,
                cluster: 'eu',
                forceTLS: false,
                httpHost: 'synchronizer.tbdm.net',
                // statsHost: 'http://synchronizer.tbdm.net/stats',
                wsHost: 'synchronizer.tbdm.net',
                wsPort: 6001,
                authEndpoint: 'https://developers.api.tbdm.net/v-1872020/eg-en/my/user/' + vuexContext.rootGetters["auth/userId"] + '/auth/private',
                auth: {
                    headers: {
                        Authorization: vuexContext.rootGetters["auth/token"]
                    }
                }
    
            });
    
            let userChannel = pusher.subscribe('private-user.' + vuexContext.rootGetters["auth/userId"]);
    
            userChannel.bind('App\\Events\\ChatNewMessage', function(data){
                let receivedMessage = data.message;
                console.log('data in user channel>> ', data)
            });
    
            userChannel.bind('App\\Events\\AuctionDealOffered', (deal) => {
                console.log('got deal from user >>>>> ', deal)
                // this.auctions.push(currentBid.auctionee);
                vuexContext.commit('setAuctionOffer', deal.deal);
            });
    
            //to notify the user that it's offer is rejected
            userChannel.bind('App\\Events\\AuctionDealRejected', (deal) => {
                console.log('got deal rejected from user >>>>> ', deal.deal)
                // this.auctions.push(currentBid.auctionee);
                // vuexContext.commit('removeDeal', deal.deal);
            });
    
            //to notify the user that it's offer is accepted
            userChannel.bind('App\\Events\\AuctionDealAccepted', (deal) => {
                console.log('got deal accepted from user >>>>> ', deal.deal)
                // this.auctions.push(currentBid.auctionee);
            });
    
            userChannel.bind('App\\Events\\FriendRequestAccepted', (request) => {
                console.log('got friend request accepted from user >>>>> ', request)
                // this.auctions.push(currentBid.auctionee);
            });
    
            userChannel.bind('App\\Events\\FriendRequestCreated', (request) => {
                console.log('got friend request from user >>>>> ', request)
                // this.auctions.push(currentBid.auctionee);
            });

            // vuexContext.commit("createPusher", pusher);
    
            console.log('after creating pusher instance >> ', pusher);
            vuexContext.commit('setPusherCreated', true);
        }
    }
};

      // }
      