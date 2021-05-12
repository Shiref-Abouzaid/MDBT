<template>
    <section class="idea-form">
        <div class="container">
            <div class="idea-content">
                <h3>Add Your idea</h3>
                <form>
                    <div class="row justify-content-around">
                <div class="form-group col-md-5">
                <label for="fillname">Full Name</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                    id="fillname"
                />
                </div>
                <div class="form-group col-md-5">
                <label for="phone">phone</label>
                    <input
                    type="text"
                    class="form-control form-control-lg"
                    id="phone"
                />
                </div>
            </div>
                    <div class="row justify-content-around">
                <div class="form-group col-md-5">
                <label for="email">Email</label>
                <input
                    type="email"
                    class="form-control form-control-lg"
                    id="email"
                />
                </div>
                <div class="form-group col-md-5">
                <label for="title">Title</label>
                    <input
                    type="text"
                    class="form-control form-control-lg"
                    id="title"
                />
                </div>
            </div>
                <div class="row justify-content-around">
        <div class="form-group col-md-5">
                <label for="partnertype">Partner Type</label>
                <select id="partnertype" class="form-control form-control-lg">
                    <option>choose Type</option>
                    <option>syria</option>
                </select>
                </div>
                <div class="form-group col-md-5">
                <label for="country">Country</label>
                <select id="country" class="form-control form-control-lg">
                    <option>choose Type</option>
                    <option>syria</option>
                </select>
                </div>
            </div>
                <div class="row justify-content-around">
        <div class="form-group col-md-5">
                <label for="governorate">Governorate</label>
                <select id="governorate" class="form-control form-control-lg">
                    <option>choose Type</option>
                    <option>syria</option>
                </select>
                </div>
                <div class="form-group col-md-5">
                <label for="city">City</label>
                <select id="city" class="form-control form-control-lg">
                    <option>choose Type</option>
                    <option>syria</option>
                </select>
                </div>
            </div>
                <div class="form-row justify-content-center">
                <div class="form-group col-11">
                <label for="description">Descrip Your Idea</label>
                <textarea
                    class="form-control"
                    id="description"
                    rows="4"
                ></textarea>
                </div>
            </div>
                <div class="btn-section">
                <button class="idea-btn">Add Auction</button>
            </div>
                </form>
            </div>
        </div>
    ​
    </section>
</template>