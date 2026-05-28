import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiTrash2, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';
import useStore from '../../store/useStore';

export default function AdminReviews() {
  const { reviews, fetchAllReviews, deleteReview, toggleReviewApproval } = useStore();

  useEffect(() => {
    fetchAllReviews();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this review?')) return;
    try {
      await deleteReview(id);
      toast.success('Review deleted');
    } catch {
      toast.error('Failed to delete review');
    }
  };

  const handleToggleApproval = async (id: string, isApproved: boolean) => {
    try {
      await toggleReviewApproval(id);
      toast.success(isApproved ? 'Review hidden' : 'Review approved');
    } catch {
      toast.error('Failed to update review');
    }
  };

  const avgRating = reviews.length > 0 ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : '0';

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Reviews</h1>
          <p className="text-sm text-gray-500">{reviews.length} reviews · Average rating: {avgRating} ⭐</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {[5, 4, 3, 2, 1].map(stars => {
          const count = reviews.filter(r => r.rating === stars).length;
          const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
          return (
            <div key={stars} className="bg-white rounded-xl border border-gray-100 p-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(stars)].map((_, i) => <FiStar key={i} className="text-yellow-500 text-xs" style={{ fill: '#eab308' }} />)}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{count}</span>
                <span className="text-xs text-gray-400">{pct.toFixed(0)}%</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id || review._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <img src={review.userImage} alt={review.userName} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm font-semibold text-gray-900">{review.userName}</h3>
                    <span className="text-xs text-gray-400">· {review.serviceTitle}</span>
                    {review.isApproved ? (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Approved</span>
                    ) : (
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">Pending</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 my-1">
                    {[...Array(5)].map((_, j) => (
                      <FiStar key={j} className={`text-xs ${j < review.rating ? 'text-yellow-500' : 'text-gray-200'}`} style={j < review.rating ? { fill: '#eab308' } : {}} />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">{review.createdAt}</span>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => handleToggleApproval(review.id || review._id || '', review.isApproved || false)}
                  className={`p-2 rounded-lg transition-colors ${review.isApproved ? 'text-orange-400 hover:text-orange-600 hover:bg-orange-50' : 'text-green-400 hover:text-green-600 hover:bg-green-50'}`}
                  title={review.isApproved ? 'Hide review' : 'Approve review'}
                >
                  {review.isApproved ? <FiXCircle /> : <FiCheckCircle />}
                </button>
                <button
                  onClick={() => handleDelete(review.id || review._id || '')}
                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="text-gray-400">No reviews yet</p>
        </div>
      )}
    </div>
  );
}
