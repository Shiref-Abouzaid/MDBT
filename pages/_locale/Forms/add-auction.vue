<template>
  <section class="auction-form">
    <div class="container">
      <div class="auction-content">
        <h3>Add Auction</h3>
        <form>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="auctitle">Auction Title</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="auctitle"
              />
            </div>
            <div class="form-group col-md-5">
              <label for="auccategory">Auction Category</label>
              <select id="auccategory" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="opendate">Open Date</label>

              <b-form-datepicker></b-form-datepicker>
            </div>
            <div class="form-group col-md-5">
              <label for="enddate">End Date</label>
              <b-form-datepicker></b-form-datepicker>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="opendate">Open From</label>
              <b-form-timepicker></b-form-timepicker>
            </div>
            <div class="form-group col-md-5">
              <label for="enddate">End To</label>
              <b-form-timepicker></b-form-timepicker>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="openprice">Open Price</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="openprice"
              />
            </div>
            <div class="form-group col-md-5">
              <label for="value">Increment Value</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="value"
              />
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="coverimage">Cover Image</label>
              <div class="text-field">
                <input type="file" id="coverimage" />

                <label for="coverimage" class="label-file">Choose File</label>
              </div>
                  <div class="row">
                <div class="col-md-3">
                 <div class="gallery-box">
                  <div class="gallery">
                    <img class="image" src="/images/person.jpeg" alt="">
                  </div>
                  <img class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                  </div>
                </div>
               
              </div>
            </div>
            <div class="form-group col-md-5">
              <label for="gallery">Gallery</label>
              <div class="text-field">
                <input type="file" id="gallery" />
                <label for="gallery" class="label-file">Choose File</label>
              </div>
              <div class="row">
                <div class="col-md-3">
                   <div class="gallery-box">
                  <div class="gallery">
                    <img class="image" src="/images/person.jpeg" alt="">
                  </div>
                  <img class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                  </div>
                </div>
                   <div class="col-md-3">
                   <div class="gallery-box">
                  <div class="gallery">
                    <img class="image" src="/images/person.jpeg" alt="">
                  </div>
                  <img class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                  </div>
                </div>
                   <div class="col-md-3">
                   <div class="gallery-box">
                  <div class="gallery">
                    <img class="image" src="/images/person.jpeg" alt="">
                  </div>
                  <img class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                  </div>
                </div>
                    <div class="col-md-3">
                   <div class="gallery-box">
                  <div class="gallery">
                    <img class="image" src="/images/person.jpeg" alt="">
                  </div>
                  <img class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                  </div>
                </div>
                    <div class="col-md-3">
                   <div class="gallery-box">
                  <div class="gallery">
                    <img class="image" src="/images/person.jpeg" alt="">
                  </div>
                  <img class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div class="form-row justify-content-center">
            <div class="form-group col-11">
              <label for="description">Description</label>
              <textarea
                class="form-control"
                id="description"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div class="btn-section">
            <button class="auction-btn">Add Auction</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>