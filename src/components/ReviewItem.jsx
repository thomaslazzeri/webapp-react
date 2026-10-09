export const ReviewItem = ({ review }) => (
    <li className='review'>
        <h3>{review.author} - {review.rating}/5</h3>
        <p>{review.text}</p>
    </li>
);